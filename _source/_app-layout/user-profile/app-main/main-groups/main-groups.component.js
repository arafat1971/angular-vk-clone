'use strict';

const MainGroupsComponent = {
    template: `
        <div class="content left">
            <div class="content__container">
                <div class="content__head">
                    <a class="btn btn_dflt" href="javascript:void(0);">All groups</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">Manage groups</a>
                    <a class="btn" href="javascript:void(0);">New group</a>
                </div>
                <div class="form">
                    <form-example></form-example>
                </div>
                <div class="content__body">
                    <group-item ng-repeat="group in [1,2,3,4,5]" class="user"></group-item>
                </div>
            </div>
        </div>

        <div class="aside right">
            <div class="aside__container">
                <menu-item ng-repeat="item in [1,2,3]" class="item"></menu-item>
            </div>
            <div class="aside__container">
                <group-item ng-repeat="group in [1,2,3,4,5]" class="user"></group-item>
            </div>
        </div>






        `
};

export default MainGroupsComponent;