"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import AppTopComponent from "./app-top.component.js";


const AppTopModule = angular.module("AppTopModule", [])
    .component("appTop", AppTopComponent)
    .name;

export default AppTopModule;