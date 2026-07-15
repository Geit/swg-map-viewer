import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useAtom } from 'jotai';

import { MapConfiguration, resolveTileSet } from '../data/maps';
import { currentTileSetAtom, TileSetId } from '../atoms/waypoints';

interface TileSetSelectProps {
  currentMap: MapConfiguration;
}

// Tileset picker for planets that offer more than one tileset; renders nothing for the rest.
const TileSetSelect: React.FC<TileSetSelectProps> = ({ currentMap }) => {
  const [tileSet, setTileSet] = useAtom(currentTileSetAtom);

  if (currentMap.tileSets.length < 2) return null;

  // Reflect the tileset actually rendered, not the raw global preference, so the picker never
  // shows a blank value on a planet that lacks the globally selected tileset.
  const activeTileSetId = resolveTileSet(currentMap, tileSet)?.id ?? tileSet;

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="tileset-select">Tileset</InputLabel>
      <Select<TileSetId>
        value={activeTileSetId}
        labelId="tileset-select"
        onChange={evt => setTileSet(evt.target.value)}
      >
        {currentMap.tileSets.map(tileSetOption => (
          <MenuItem key={tileSetOption.id} value={tileSetOption.id}>
            {tileSetOption.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TileSetSelect;
