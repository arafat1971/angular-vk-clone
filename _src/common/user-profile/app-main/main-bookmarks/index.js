/*global angular */

"use strict";

import MainBookmarksComponent from './main-bookmarks.component';
//import MainBookmarksService   from './main-bookmarks.service';


const MainBookmarks = angular.module('MainBookmarks', ["ui.router"])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainBookmarks', MainBookmarksComponent)
    .name;

export default MainBookmarks;