'use strict';

const MainImagesComponent = {
    template: `
        <div class="content full">
            <div class="content__container">
                <div class="content__head">
                    <span>My albums</span>
                    <span>12</span>
                    <a class="btn" href="javascript:void(0);">New album</a>
                    <a class="btn" href="javascript:void(0);">Add photo</a>
                </div>
                <div class="content__body">
                    <album-item ng-repeat="album in [1,2,3]" class="album"></album-item>
                </div>
                <div class="content__foot">
                    <a class="btn btn_dflt" href="javascript:void(0);">Colapse it</a>
                </div>
            </div>

            <div class="content__container">
                <div class="content__head">
                    <span>My photo</span>
                    <span>456</span>
                    <a class="btn btn_dflt" href="javascript:void(0);">Comments</a>
                </div>
                <div class="content__body">
                    <image-item ng-repeat="image in [1,2,3,4,5,7,8,9,10,11,12]" class="image"></image-item>
                </div>
            </div>
        </div>
        `
};

export default MainImagesComponent;