/*global angular */
"use strict";

import pageMainComponent    from './page-main.component.js';
import mainAsideComponent   from './main-aside/main-aside.component.js';
import mainContentComponent from './main-content/main-content.component.js';

const pageMain = angular.module('pageMain', [])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})

    .component('pageMain',    pageMainComponent)
    .component('mainAside',   mainAsideComponent)
    .component('mainContent', mainContentComponent)
    .name;

export default pageMain;