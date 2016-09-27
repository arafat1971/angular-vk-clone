'use strict';

const MainMessagesComponent = {
    template: `
        <div class="content left">
            <div class="content__container">
                <div class="form">
                    <form-example></form-example>
                </div>
                <div class="content__body">
                    <message-item ng-repeat="dialog in [1,2,3,4,5]" class="item"></message-item>
                </div>
                <div class="content__foot">
                    <a class="btn btn_dflt" href="javascript:void(0);">Mute ON</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">Spam</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">icon</a>
                </div>
            </div>
        </div>

        <div class="aside right">
            <div class="aside__container">
                <menu-item class="item"></menu-item>
            </div>
        </div>
        `
};

export default MainMessagesComponent;