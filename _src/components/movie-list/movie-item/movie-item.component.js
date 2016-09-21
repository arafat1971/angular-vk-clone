// MovieItemComponent / MovieItemComponent / MovieItemComponent / MovieItemComponent / MovieItemComponent /

import controller from './movie-item.controller.js';

const MovieItemComponent = {
    bindings: {
        movie: '<'
    },
    controller,
    template: `
    <div class="movie__container">
        <div class="movie__head">{{$ctrl.movie.title}}</div>
        <div class="movie__body">movie body</div>
        <div class="movie__foot">{{$ctrl.movie.description}}</div>
    </div>`,
};

export default MovieItemComponent;