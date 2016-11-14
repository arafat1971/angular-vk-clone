"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import UserLoginComponent from "./user-login.component.js";


const UserLoginModule = angular.module("UserLoginModule", [])
    .component("userLogin", UserLoginComponent)
    .name;

export default UserLoginModule;