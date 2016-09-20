/*global angular */

'use strict';


import AppComponent from './app.component';


module.export = angular
    .module('myApp', ["ui.router"])
    .run(($rootScope) => {
        $rootScope.demo = "vk.com demo";
    })
    .component('page', AppComponent)
    .name;






