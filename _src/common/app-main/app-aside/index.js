/*global angular */

"use strict";

import AsideHomeComponent   from './aside-home/aside-home.component.js';

const appAside = angular.module('appAside', [])

    .component('asideHome', AsideHomeComponent)
    .name;

export default appAside;