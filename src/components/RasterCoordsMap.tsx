import React from 'react';
import { Map, MapProps } from 'react-leaflet';
import RasterCoords from 'leaflet-rastercoords';

interface RasterCoordsMapProps extends MapProps {
  rasterCoordsInstance: InstanceType<typeof RasterCoords> | null;
  setRasterCoordsInstance: React.Dispatch<React.SetStateAction<RasterCoords | null>>;
}

export default class RasterCoordsMap<S extends RasterCoordsMapProps> extends Map<S> {
  rasterCoordsInstance: null | InstanceType<typeof RasterCoords> = null;

  createLeafletElement() {
    const LeafletMapElement = super.createLeafletElement(this.props);

    const rc = new RasterCoords(LeafletMapElement, [4096, 4096]);

    this.props.setRasterCoordsInstance(rc);

    return LeafletMapElement;
  }
}
