import React from 'react';
import RasterCoords from 'leaflet-rastercoords';

interface RasterCoordsContextType {
  rasterCoordsInstance: InstanceType<typeof RasterCoords> | null;
  setRasterCoordsInstance: React.Dispatch<React.SetStateAction<RasterCoords | null>>;
}

const RasterViewContext = React.createContext<RasterCoordsContextType>({
  rasterCoordsInstance: null,
  setRasterCoordsInstance: () => null,
});

export default RasterViewContext;
