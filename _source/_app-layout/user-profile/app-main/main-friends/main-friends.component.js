'use strict';

const MainFriendsComponent = {
    template: `
        <div class="content left">
            <div class="content__container">
                <div class="content__head">
                    <a class="btn btn_dflt" href="javascript:void(0);">all friends</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">friends online</a>
                    <a class="btn" href="javascript:void(0);">find friend</a>
                </div>
                <div class="form">
                    <form-example></form-example>
                </div>
                <div class="content__body">
                    <user-item ng-repeat="user in [1,2,3,4,5,6,7,8,9,10]" class="user"></user-item>
                </div>
            </div>
        </div>

        <div class="aside right">
            <div class="aside__container">
                <menu-item ng-repeat="item in [1,2,3]" class="item"></menu-item>
            </div>
            <div class="aside__container">
                <user-item ng-repeat="friend in [1,2,3,4]" class="user"></user-item>
            </div>
        </div>
        `
};

export default MainFriendsComponent;



