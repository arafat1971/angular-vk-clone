/*global angular */

"use strict";

import UserProfileModule from './user-profile/index.js';
//import AuthApp     from './auth-app/index.js';
//import AboutApp    from './about-app/index.js';


const common = angular.module('app.common', [
        UserProfileModule
    ])
    .name;
export default common;