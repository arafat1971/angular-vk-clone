/*global angular */

"use strict";

import UserInfoComponent from "./user-info/user-info.component.js";
import UserItemComponent from "./user-item/user-item.component.js";


const UserModule = angular.module("UserModule", [])
    .component("userInfo", UserInfoComponent)
    .component("userItem", UserItemComponent)
    .name;

export default UserModule;