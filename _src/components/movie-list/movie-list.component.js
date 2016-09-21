// MovieListComponent / MovieListComponent / MovieListComponent / MovieListComponent / MovieListComponent /

import controller from './movie-list.controller.js';

const MovieListComponent = {
    controller,
    template: `
        <div class="title">List of MOVIES:</div>
        <movie-item class="movie"
            ng-if="$ctrl._movies.length"
            ng-repeat="movie in $ctrl._movies track by $index"
            movie="movie"></movie-item>`,
};

export default MovieListComponent;