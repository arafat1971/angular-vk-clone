'use strict';

const MainNewsComponent = {
    template: `
        <div class="content left">
            <div class="content__container">
                <add-news class="form">FORM (add news) + btns</add-news>
            </div>
            <hr />
            <div>REPEATED BLOCKS</div>
            <div class="content__container">
                <post-item></post-item>
            </div>
            <div class="content__container">
                <post-item></post-item>
            </div>
            <div class="content__container">
                <post-item></post-item>
            </div>
            lazy loading by scroll
        </div>

        <div class="aside right">
            <div class="aside__container">
                MENU-LIST | MENU-ITEM
            </div>
            <div class="aside__container">
                CHECK-BOX
            </div>
            <div class="aside__container">
                MENU-LIST | FRIEND-ITEM
            </div>
        </div>
        `
};

export default MainNewsComponent;