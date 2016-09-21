/*global angular */

import UserListService from './user-list.service.js';

import UserListComponent from './user-list.component.js';
import UserItemComponent from './user-item/user-item.component.js';

const UserList = angular.module('UserList', [])

    .service('UserListService', UserListService)

    .component('userList', UserListComponent)
    .component('userItem', UserItemComponent)

    .name;

export default UserList;