/*global angular */

"use strict";

import MenuItemComponent   from "./menu-item/menu-item.component.js";

const MenuModule = angular.module("MenuModule", [])
    .component("menuItem", MenuItemComponent)
    .name;

export default MenuModule;