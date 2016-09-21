/*global angular */

"use strict";

import appAside   from './app-aside/index.js';
import appContent from './app-content/index.js';

const appMain = angular.module('appMain', [
        appAside,
        appContent
    ])
    .name;

export default appMain;