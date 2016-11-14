/*global angular */

"use strict";

import MainNewsComponent from './main-news.component';
//import MainNewsService   from './main-news.service';

const MainNews = angular.module('MainNews', ["ui.router"])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainNews', MainNewsComponent)
    .name;

export default MainNews;