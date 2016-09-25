/*global angular */

"use strict";

import MainGamesComponent from './main-games.component';
//import MainGamesService   from './main-games.service';

const MainGames = angular.module('MainGames', [])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainGames', MainGamesComponent)
    .name;

export default MainGames;