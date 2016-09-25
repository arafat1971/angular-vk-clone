/*global angular */

"use strict";

import MainAudioComponent from './main-audio.component';
//import MainAudioService   from './main-audio.service';

const MainAudio = angular.module('MainAudio', ["ui.router"])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainAudio', MainAudioComponent)
    .name;

export default MainAudio;