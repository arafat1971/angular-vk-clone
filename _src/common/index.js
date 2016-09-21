/*global angular */
"use strict";

import pageTop  from './page-top/index.js';
import pageNav  from './page-nav/index.js';
import pageMain from './page-main/index.js';



const common = angular.module('app.common', [
        pageTop,
        pageNav,
        pageMain
    ])
    .name;

export default common;