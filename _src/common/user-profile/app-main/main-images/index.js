/*global angular */

"use strict";

import MainImagesComponent from './main-images.component';
//import MainImagesService   from './main-images.service';

const MainImages = angular.module('MainImages', ["ui.router"])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainImages', MainImagesComponent)
    .name;

export default MainImages;