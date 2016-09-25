/*global angular */

"use strict";

import MainHomeComponent from './main-home.component';
//import MainHomeService   from './main-home.service';

const MainHome = angular.module('MainHome', [])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainHome', MainHomeComponent)
    .name;

export default MainHome;