/*global angular */

"use strict";

import MainDocsComponent from './main-docs.component';
//import MainDocsService   from './main-docs.service';


const MainDocs = angular.module('MainDocs', ["ui.router"])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainDocs', MainDocsComponent)
    .name;

export default MainDocs;