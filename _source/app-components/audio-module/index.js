/*global angular */

"use strict";

import AudioItemComponent   from "./audio-item/audio-item.component.js";
import AudioPlayerComponent from "./audio-player/audio-player.component.js";

const AudioModule = angular.module("AudioModule", [])
    .component("audioItem",   AudioItemComponent)
    .component("audioPlayer", AudioPlayerComponent)
    .name;

export default AudioModule;