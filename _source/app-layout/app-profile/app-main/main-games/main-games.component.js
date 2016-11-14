'use strict';


const MainGamesComponent = {
    template: `
        <div class="content full">
            <div class="content__container half" equal-sibling>
                <div class="content__head">
                    <a class="btn btn_dflt" href="javascript:void(0);">My Game</a>
                </div>
                <game-item ng-repeat="game in [1,2,3,4,5]" class="item"></game-item>
            </div>

            <div class="content__container half" equal-sibling>
                <div class="content__head">Friends activity</div>
                <user-item ng-repeat="friend in [1,2,3,4,5]" class="user"></user-item>
            </div>

            <div class="content__container">
                <div class="content__head">
                    <a class="btn btn_dflt" href="javascript:void(0);">Home</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">Popular</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">New</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">Adventures</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">Games</a>
                    <a class="btn btn_dflt" href="javascript:void(0);">More (dropdown)</a>
                </div>
                <div class="form">
                    <form-example></form-example>
                </div>
                <div class="content__body">CAROUSEL</div>
            </div>

            <div class="content__container" ng-repeat="block in [1,2,3]">
                <div class="content__head">Title
                    <a class="btn" href="javascript:void(0);">home</a>
                </div>
                <div class="content__body games">
                    <game-item ng-repeat="game in [1,2,3,4,5]" class="item"></game-item>
                </div>
            </div>
        </div>
        `
};

export default MainGamesComponent;