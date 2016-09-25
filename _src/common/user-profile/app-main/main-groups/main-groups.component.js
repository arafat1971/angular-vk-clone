'use strict';

const MainGroupsComponent = {
    template: `
        <div class="content left">
            <div class="content__container">
                <div class="content__head">HEAD (router + BTN)</div>
                <div class="form">FORM (search groups)</div>
                <div class="content__body">GROUPS-LIST | GROUPS-ITEM</div>
            </div>
        </div>

        <div class="aside right">
            <div class="aside__container">
                MENU-LIST | MENU-ITEM
            </div>
            <div class="aside__container">
                MENU-LIST | GROUPS-ITEM (like a friends)
            </div>
        </div>
        `
};

export default MainGroupsComponent;