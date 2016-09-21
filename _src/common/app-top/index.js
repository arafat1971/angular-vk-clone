/*global angular */

"use strict";

import AppTopComponent from './app-top.component.js';

const appTop = angular.module('appTop', [])
    .component('appTop', AppTopComponent)
    .name;

export default appTop;