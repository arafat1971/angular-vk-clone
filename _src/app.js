/*global angular */
'use strict';

import AppComponent from './app.component.js';
import Components   from './components/index.js';
import Common       from './common/index.js';

module.export = angular
    .module('myApp', [Components, Common, "ui.router"])
    .run(($rootScope) => {
        $rootScope.demo = "vk.com demo";
        $rootScope.profileId = "mr-heisenberg";
    })
    .component('page', AppComponent)
    .name;

