/*global angular */

"use strict";

import GroupItemComponent from "./group-item/group-item.component.js";


const GroupsModule = angular.module("GroupsModule", [])
    .component("groupItem", GroupItemComponent)
    .name;

export default GroupsModule;