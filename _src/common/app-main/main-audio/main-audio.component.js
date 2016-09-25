'use strict';

const MainAudioComponent = {
    template: `
        <div class="content left">
            <div class="content__container">
                <div class="content__head">HEAD (player)</div>
                <div class="form">FORM (search audio)</div>
                <div class="content__body">AUDIO-LIST | AUDIO-ITEM</div>
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

export default MainAudioComponent;