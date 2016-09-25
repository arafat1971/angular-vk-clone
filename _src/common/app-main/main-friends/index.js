/*global angular */

"use strict";

import MainFriendsComponent from './main-friends.component';
//import MainFriendsService   from './main-friends.service';

const MainFriends = angular.module('MainFriends', [])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainFriends', MainFriendsComponent)
    .name;

export default MainFriends;