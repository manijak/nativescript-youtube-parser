[![npm](https://img.shields.io/npm/v/nativescript-youtube-parser.svg)](https://www.npmjs.com/package/nativescript-youtube-parser)
[![npm](https://img.shields.io/npm/dt/nativescript-youtube-parser.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-youtube-parser)

# NativeScript YouTube Parser
A util to extract raw video-URLs and format information from a YouTube-video page. This way you can play YouTube videos in the native video player.
The plugin is based on npm package `youtube-parser` and adapted to the NativeScript framework (removed cli & non needed dependencies). 
Works on iOS and Android. 

## Installation
Run  `npm i nativescript-youtube-parser` in the ROOT directory of your project.

## Usage

#### getURL(url, format)
* url - 'watch video' page on YouTube.
* format - Object with `quality` (small, medium, high) and `container` (flv, 3pg, mp4, webm). 
* return value - A promise object to resolve with an array of URL/format info objects that match the requested format.
```js
var youtubeParser = require('nativescript-youtube-parser');

youtubeParser.getURL('https://youtu.be/C_vqnySNhQ0', { quality: 'medium', container: 'mp4' })
    .then(function (urlList) {
        console.log("YouTube mp4 video url: ", urlList[0].url);
    }
);
```

## Changelog

**1.0.0**
* Initial release

## Author
* [manijak](https://github.com/manijak)

## Original Author/Plugin
* [kuu](https://www.npmjs.com/package/youtube-parser)