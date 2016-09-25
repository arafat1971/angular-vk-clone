'use strict';

const MainFriendsComponent = {
    template: `
        <div class="content left">
            <div class="content__container">
                <div class="content__head">HEAD (router)</div>
                <div class="form">FORM (search friends)</div>
                <div class="content__body">FRIENDS-LIST | FRIENDS-ITEM</div>
            </div>
        </div>

        <div class="aside right">
            <div class="aside__container">
                MENU-LIST | MENU-ITEM
            </div>
            <div class="aside__container">
                MENU-LIST | FRIEND-ITEM
            </div>
        </div>
        `
};

export default MainFriendsComponent;