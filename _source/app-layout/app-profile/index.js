"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
import uiRouter from "angular-ui-router";
// ---------------------------------------------------------------
import AppProfileConfig from "./app-profile.config.js";
import AppProfileRun    from "./app-profile.run.js";
// ---------------------------------------------------------------
import AppMainModule from "./app-main/index.js";
import AppNavModule  from "./app-nav/index.js";
import AppTopModule  from "./app-top/index.js";
// ---------------------------------------------------------------
import AppProfileComponent from "./app-profile.component.js";



const AppProfileModule = angular.module("AppProfileModule", [
    AppMainModule,
    AppNavModule,
    AppTopModule,
    uiRouter
])
.config(AppProfileConfig)
.run(AppProfileRun)
.component("appProfile", AppProfileComponent)
.name;

export default AppProfileModule;