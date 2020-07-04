# <img height="32" src="./src/components/swg.svg"> Star Wars Galaxies Map Viewer
A Map Viewer for Star Wars Galaxies. Uses [Leaflet](https://leafletjs.com/) to allow the original Planets from Galaxies to be richly annotated with waypoints, markers and other content.

The Planet Selection screen is powered by [ThreeJS](https://threejs.org/), and [react-three-fiber](https://github.com/react-spring/react-three-fiber).

UI Elements are powered by [Material UI](https://material-ui.com/).

## Development
To bootstrap the project, you'll need a recent version of Node & Yarn v1 installed.

To install Node dependencies, simply run `yarn`.

You'll also need the following non-Node dependencies:
- [gdal2tiles-leaflet](https://github.com/commenthol/gdal2tiles-leaflet) should be cloned within a sibling directory, and any of it's dependencies installed on your machine. 
    - This is used to split the source planet maps into tiled versions
    - Will also require `python3` to be available within your PATH.
- [pngquant](https://pngquant.org/) to be installed on your machine. 
    - Used to compress output tiles to reduce bandwidth requirements by up to 70%. Tile compression can be disabled with by using `DISABLE_OPTIMIZATION=true yarn generate-tiles`


When all dependencies are installed, you can run the following commands in the project folder:

### `yarn generate-tiles`
Generate (or regenerate) the tileset used by the application. This command must be run before begining development, and may take a long time to complete (Typically around 3~5 minutes).

As above, this process requires `python3`, `gdal2tiles-leaflet`, and `pngquant`.

By default, tiles will be compressed using `pngquant` to save bandwidth when hosting the application in a production environment. If you do not desire this behaviour, simply use `DISABLE_OPTIMIZATION=true yarn generate-tiles`.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console, and any build errors will occupy a full screen error window.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the create-react-app docs about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.