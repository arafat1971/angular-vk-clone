/*global angular */
"use strict";

import pageTopComponent     from './page-top.component.js';

const pageTop = angular.module('pageTop', [])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('pageTop',     pageTopComponent)
    .name;

export default pageTop;