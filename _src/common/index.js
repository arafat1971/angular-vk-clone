/*global angular */

"use strict";

//import UserProfile from './user-profile/index.js';
//import AuthApp     from './auth-app/index.js';
//import AboutApp    from './about-app/index.js';


// USER-PROFILE modules:
import AppTop     from './app-top/index.js';
import AppNav     from './app-nav/index.js';
import AppMain    from './app-main/index.js';
import appAside   from './app-aside/index.js';   // deprecated modules
import appContent from './app-content/index.js'; // deprecated modules

const common = angular.module('app.common', [
        AppTop,
        AppNav,
        AppMain,
        appAside,
        appContent
    ])
    .name;
export default common;