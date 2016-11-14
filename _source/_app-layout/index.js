/*global angular */

"use strict";

import UserProfileModule from './user-profile/index.js';
import UserLoginModule   from './user-login/index.js';



const common = angular.module('app.common', [
        UserLoginModule,
        UserProfileModule
    ])
    .name;

export default common;