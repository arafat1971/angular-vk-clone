'use strict';

const MainHomeComponent = {
    template: `
        <div class="aside left">
            <div class="aside__container">
                <user-pic>user-pic</user-pic>
            </div>

            <div class="aside__container">
                <div class="aside__head">Gifts</div>
                <div class="aside__body">
                    <gift-item ng-repeat="gift in [1,2,3,4,5,6]" class="item">gift-item</gift-item>
                </div>
            </div>

            <div class="aside__container">
                <div class="aside__head">Friends</div>
                <div class="aside__body">
                    <user-item ng-repeat="user in [1,2,3,4,5,6]" class="user"></user-item>
                </div>
                <hr />
                <div class="aside__head">Friends online</div>
                <div class="aside__body">
                    <user-item ng-repeat="user in [1,2,3]" class="user"></user-item>
                </div>
            </div>

            <div class="aside__container">
                <div class="aside__head">Publics</div>
                <div class="aside__body">
                    <group-item ng-repeat="group in [1,2,3,4,5]" class="user"></group-item>
                </div>

                <hr />
                <div class="aside__head">Pictures</div>
                <div class="aside__body">
                    <image-item ng-repeat="image in [1,2]" class="image"></image-item>
                </div>

                <hr />
                <div class="aside__head">Movies</div>
                <div class="aside__body">
                    <movie-item ng-repeat="movie in [1,2]" class="movie"></movie-item>
                </div>

                <hr />
                <div class="aside__head">Audio</div>
                <div class="aside__body">
                    <audio-item ng-repeat="audio in [1,2,3]" class="item"></audio-item>
                </div>
            </div>
        </div>

        <div class="content right">
            <div class="content__container">
                <user-info></user-info>
            </div>
            <div class="content__container">
                <form-example class="form"></form-example>
            </div>
            <div class="content__container">
                <form-example class="form"></form-example>
            </div>
            <div class="content__container">
                <news-item ng-repeat="audio in [1,2,3,4,5,6,7,8]" class="news"></news-item>
            </div>
        </div>
        `
};

export default MainHomeComponent;