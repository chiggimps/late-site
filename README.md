# Site for Late

## Building

Run `npx webpack --mode development` to build the site. The output will be in the `dist` directory.

## Running on a local

Run `npx webpack serve --mode development` to start a local server on port 8080.

## Deploying

After building to dist, push to Firebase: `firebase deploy`.

## Development

Main page is in `index.html`. 

The main script is `src/index.ts`, which gets bundled into `dist/bundle.js`.

The main style is `styles.css`.