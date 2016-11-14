/*global angular */

"use strict";

import UserInfoComponent from "./user-info/user-info.component.js";
import UserItemComponent from "./user-item/user-item.component.js";
import UserPicComponent  from "./user-pic/user-pic.component.js";


const UserModule = angular.module("UserModule", [])
    .component("userInfo", UserInfoComponent)
    .component("userItem", UserItemComponent)
    .component("userPic", UserPicComponent)
    .name;

export default UserModule;