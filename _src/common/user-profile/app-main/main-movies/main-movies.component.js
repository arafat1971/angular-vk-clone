'use strict';

const MainMoviesComponent = {
    template: `
        <div class="content full">
            <div class="content__container">
                <div class="content__head">
                    <a class="btn btn_dflt" href="javascript:void(0);">My movie</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">Catalog</a>
                    <a class="btn" href="javascript:void(0);">Add movie</a>
                </div>
                <div class="content__body">
                    <form-example class="form"></form-example>
                </div>
                <hr />
                <div class="content__head">Title</div>
                <div class="content__body">
                    (carousel)
                    <movie-item ng-repeat="movie in [1,2,3]" class="movie"></movie-item>
                </div>
                <hr />
                <div class="content__head">Title</div>
                <div class="content__body">
                    (list)
                    <movie-item ng-repeat="movie in [1,2,3]" class="movie"></movie-item>
                </div>
            </div>

            <div class="content__container">
                <div class="content__head">Title</div>
                <div class="content__body">
                    (list)
                    <movie-item ng-repeat="movie in [1,2,3]" class="movie"></movie-item>
                </div>
                <div class="content__foot">
                    <a class="btn btn_dflt" href="javascript:void(0);">Colapse it</a>
                </div>
            </div>

            <div class="content__container">
                <div class="content__head">Title</div>
                <div class="content__body">
                    (carousel)
                    <movie-item ng-repeat="movie in [1,2,3]" class="movie"></movie-item>
                </div>
                <div class="content__foot">
                    <a class="btn btn_dflt" href="javascript:void(0);">Colapse it</a>
                </div>
            </div>
        </div>
        `
};

export default MainMoviesComponent;