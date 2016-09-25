/*global angular */

"use strict";

import MainMoviesComponent from './main-movies.component';
//import MainMoviesService   from './main-movies.service';

const MainMovies = angular.module('MainMovies', [])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
    .component('mainMovies', MainMoviesComponent)
    .name;

export default MainMovies;