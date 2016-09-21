/*global angular */
import MovieListService from './movie-list.service.js';


import MovieListComponent from './movie-list.component.js';
import MovieItemComponent from './movie-item/movie-item.component.js';


const MovieList = angular.module('MovieList', [])

    .service('MovieListService', MovieListService)

    .component('movieList', MovieListComponent)
    .component('movieItem', MovieItemComponent)

    .name;

export default MovieList;