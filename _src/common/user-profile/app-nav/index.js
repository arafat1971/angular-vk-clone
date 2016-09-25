/*global angular */

"use strict";

import AppNavComponent from "./app-nav.component.js";


const appNav = angular.module("appNav", [])
    .component("appNav", AppNavComponent)
    .name;

export default appNav;