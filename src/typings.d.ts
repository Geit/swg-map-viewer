declare module 'leaflet-rastercoords' {
    import { Map, LatLng, Point, LatLngExpression, PointExpression } from 'leaflet';

    export default class RasterCoords {
        constructor(map: Map, imgsize: number[], tilesize?: number);

        zoomLevel(): number;
        unproject(coords: PointExpression): LatLng;
        project(coords: LatLngExpression): Point;
        setMaxBounds(): void;
    }
}
