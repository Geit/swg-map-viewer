// Shared types for the additive "retiler" pipeline (scripts/generate-capture-tiles.ts).
// This lives alongside — and never replaces — the legacy gdal2tiles pipeline in scripts/generate-tiles.ts.

// Edge length of every tile in pixels. The whole pipeline's central invariant: maps are a
// multiple of this, and base zoom == log2(mapPx / TILE_SIZE).
export const TILE_SIZE = 256;

// A source of lossless base-zoom tiles. Both master and capture sources implement this so the
// pyramid builder is agnostic to where the pixels come from.
//
// Usage contract: the builder walks base-tile rows top-to-bottom. For each row `by` it calls
// prepareRow(by) once, then readBaseTile(bx, by) for every column. This lets capture sources hold
// only one or two decoded capture-tile rows in memory at a time.
export interface BaseGrid {
  // Width == height of the whole map in pixels (power of two, multiple of 256).
  mapPx: number;
  // Base zoom level == log2(mapPx / 256).
  baseZoom: number;
  // Load/evict whatever backing data is needed to serve base-tile row `by`.
  prepareRow(by: number): Promise<void>;
  // Extract one base tile as a packed, top-down RGB buffer (256 * 256 * 3 bytes).
  readBaseTile(bx: number, by: number): Buffer;
  // Release backing memory once base-tile extraction is finished.
  dispose(): void;
}
