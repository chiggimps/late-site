# Site for $Late Meme Coin on RadixDLT
    
View: https://late.ngmi.foo

## Building

Project is built w/ Vite. 

Run `npm install` to install dependencies.

Run `npm run build` to build to `dist/`.

## Running on a local

Run `npm run dev` to run a local server.

## Deploying

Using Firebase Hosting. Get the Firebase account, install the CLI, login, and init the project. `firebase init` and choose dist as the public directory.

After building to dist, push to Firebase: `firebase deploy`.

It will be served at  (a domain managed by me).

## Structure

Main page is in `index.html`. 

The main script is `src/index.ts`, which gets bundled to `dist/assets/index-xxx.js`

The main style is `styles.css`.

# Roadmap

- [] oklch