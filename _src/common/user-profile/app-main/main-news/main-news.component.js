'use strict';

const MainNewsComponent = {
    template: `
        <div class="content left">
            <div class="content__container">
                <form-example class="form"></form-example>
            </div>

            <div class="content__container">
                <div class="content__head">Passible images</div>
                <div class="content__body">
                    <image-item ng-repeat="image in [1,2,3,4,5]" class="image"></image-item>
                </div>
            </div>

            <div ng-repeat="news in [1,2,3,4,5]" class="content__container">
                <news-item class="news"></news-item>
            </div>
        </div>


        <div class="aside right">
            <div class="aside__container">
                <menu-item ng-repeat="item in [1,2,3]" class="item"></menu-item>
            </div>
            <div class="aside__container">
                CHECK-BOX
            </div>
            <div class="aside__container">
                <user-item ng-repeat="friend in [1,2,3,4]" class="user"></user-item>
            </div>
        </div>
        `
};

export default MainNewsComponent;