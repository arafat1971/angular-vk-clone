/*global angular */

"use strict";

import PassValidator from "./pass-validator/pass-validator.directive.js";


const UserDirectives = angular.module("userDirectives", [])
    .directive("passValidator", () => new PassValidator)
    .name;

export default UserDirectives;