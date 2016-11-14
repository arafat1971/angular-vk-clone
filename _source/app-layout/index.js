"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import UserProfileModule from "./user-profile/index.js";
import UserLoginModule   from "./user-login/index.js";



const AppLayoutModule = angular.module("AppLayoutModule", [
        UserLoginModule,
//        UserProfileModule
    ])
    .name;

export default AppLayoutModule;