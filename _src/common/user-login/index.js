/*global angular */

"use strict";

import UserLoginComponent from "./user-login.component.js";


const UserLoginModule = angular.module("UserLoginModule", [
        "ui.router"
    ])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component("userLogin", UserLoginComponent)
    .name;

export default UserLoginModule;


















