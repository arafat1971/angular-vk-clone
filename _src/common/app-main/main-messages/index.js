/*global angular */

"use strict";

import MainMessagesComponent from './main-messages.component';
//import MainMessagesService   from './main-messages.service';

const MainMessages = angular.module('MainMessages', [])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainMessages', MainMessagesComponent)
    .name;

export default MainMessages;