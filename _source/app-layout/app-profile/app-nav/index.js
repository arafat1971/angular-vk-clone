"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import AppNavComponent from "./app-nav.component.js";


const AppNavModule = angular.module("AppNavModule", [])
    .component("appNav", AppNavComponent)
    .name;

export default AppNavModule;