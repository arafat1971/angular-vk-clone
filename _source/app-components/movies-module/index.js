/*global angular */

"use strict";

import MovieItemComponent from "./movie-item/movie-item.component.js";

const MoviesModule = angular.module("MoviesModule", [])
    .component("movieItem", MovieItemComponent)
    .name;

export default MoviesModule;