/*global angular */

"use strict";

import MainGroupsComponent from './main-groups.component';
//import MainGroupsService   from './main-groups.service';

const MainGroups = angular.module('MainGroups', ["ui.router"])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainGroups', MainGroupsComponent)
    .name;

export default MainGroups;