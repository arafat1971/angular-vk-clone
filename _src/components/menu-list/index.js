/*global angular */
"use strict";


import MenuListService from './menu-list.service.js';
import MenuListComponent from './menu-list.component.js';
import MenuItemComponent from './menu-item/menu-item.component.js';


const MenuList = angular.module('MenuList', [])

    .service('MenuListService', MenuListService)

    .component('menuList', MenuListComponent)
    .component('menuItem', MenuItemComponent)
    .name;




export default MenuList;