# Sample THEOlive chromeless player in React

![theolive player](https://cdn.theo.live/github/theolive-chromeless-player.PNG)

## License

This projects falls under the license as defined in https://github.com/THEOplayer/license-and-disclaimer.

## Overview

This project contains a basic implementation of a React App using a chromeless THEOlive player.
"Chromeless" means that the default UI of the THEOlive player is completely omitted. It you want to use the default UI of the THEOlive player, please visit https://github.com/THEOplayer/theolive-react-sample.

## Project setup

### Installing

You can run the command `npm install` to install all the necessary packages. This project was bootstrapped with Create React App. You can learn more in the Create React App documentation.

### Starting the application

You can start the application by running `npm run start`. It compiles and runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Examples

### Creating the [`THEOliveWrapper.tsx`](./src/components/THEOliveWrapper.tsx) component

Be sure to do the following import

```js
import { Player } from "@theolive/player/chromeless";
```

and don't include `import "@theolive/player/THEOLive.css";` this time, as we don't care about the default THEOlive UI this time.

#### IMPORTANT: update `tsconfig.json` file

When using TypeScript, the import will fail and throw the following error: `"Cannot find module '@theolive/player/chromeless' or its corresponding type declarations"`. To solve this issue, add (or change) the following in your `tsconfig.json` file:

```json
{
    "compilerOptions": {
        "moduleResolution": "node16"
    }
}
```

### Loading our channel inside [`App.tsx`](./src/App.tsx)

Inside `App.tsx`, we'll handle the loading of our channel: once our player is available, we will load our channel by passing the `channelId` which will load the manifest and start playing content

```js
await player.loadChannel("your-channel-id");
```

### Adding our own UI elements

`App.tsx` contains an example where we show two buttons: one to play and one to pause your stream. When clicking on a button, the player can be controlled in order to play/pause to stream.

```js
// function called on button click:
function onPlayClick() {
    if (player) {
        player.play();
    }
}
```

The full Player API can be found here: https://developers.theo.live/docs/player-api-details.
