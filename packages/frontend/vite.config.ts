import fs from 'fs';
import path from 'path';

import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import { PROD_TILE_HOST } from './src/data/tileHost';

const TILE_ROOT = path.join(__dirname, '../tile-server/planets/tiles');

const CONTENT_TYPES: Record<string, string> = {
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
};

function localTiles(): Plugin {
  return {
    name: 'local-tiles',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/planets/tiles', async (req, res) => {
        try {
          const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
          const localPath = path.normalize(path.join(TILE_ROOT, urlPath));
          if (!localPath.startsWith(TILE_ROOT + path.sep)) {
            res.writeHead(403);
            res.end();
            return;
          }
          const localStat = await fs.promises.stat(localPath).catch(() => null);
          if (localStat?.isFile()) {
            res.writeHead(200, {
              'Content-Type': CONTENT_TYPES[path.extname(localPath)] ?? 'application/octet-stream',
            });
            fs.createReadStream(localPath).pipe(res);
            return;
          }
          const upstream = await fetch(`${PROD_TILE_HOST}/planets/tiles${urlPath}`);
          const contentType = upstream.headers.get('content-type') || '';
          // the production host is an SPA and answers unknown paths with index.html (200), so
          // only pass real tile responses through; everything else is a genuine miss
          if (!upstream.ok || !/^image\/|^application\/json/.test(contentType)) {
            res.writeHead(404);
            res.end();
            return;
          }
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(Buffer.from(await upstream.arrayBuffer()));
        } catch {
          if (!res.headersSent) res.writeHead(502);
          res.end();
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), localTiles()],
  root: 'src',
  build: {
    outDir: path.join(__dirname, 'build'),
  },
});
