"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
import uiRouter from "angular-ui-router";
// ---------------------------------------------------------------
import MainBookmarksComponent from './main-bookmarks.component';


const MainBookmarksModule = angular.module('MainBookmarksModule', [
    uiRouter
])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
.component('mainBookmarks', MainBookmarksComponent)
.name;

export default MainBookmarksModule;