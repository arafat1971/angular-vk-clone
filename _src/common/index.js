/*global angular */

"use strict";

import AppTop  from './app-top/index.js';
import AppNav  from './app-nav/index.js';
import AppMain from './app-main/index.js';



const common = angular.module('app.common', [
        AppTop,
        AppNav,
        AppMain
    ])
    .name;

export default common;