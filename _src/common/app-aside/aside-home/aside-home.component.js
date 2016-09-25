'use strict';

const AsideHomeComponent = {
    template: `
        <div class="aside__container">
            <user-pic>user-pic</user-pic>
        </div>

        <div class="aside__container">
            <div class="aside__head">Gifts</div>
            <user-gifts class="aside__body">user-gifts</user-gifts>
        </div>

        <div class="aside__container">
            <div class="aside__head">Friends</div>
            <user-friends class="aside__body">users-friends</user-friends>

            <div class="aside__head">Friends online</div>
            <user-friends class="aside__body">users-friends</user-friends>
        </div>

        <div class="aside__container">
            <div class="aside__head">Publics</div>
            <user-publics class="aside__body">user-publics</user-publics>

            <div class="aside__head">Pictures</div>
            <user-albums class="aside__body">user-albums</user-albums>

            <div class="aside__head">Movies</div>
            <user-albums class="aside__body">user-albums</user-albums>

            <div class="aside__head">Audio</div>
            <user-audio class="aside__body">user-audio</user-audio>
        </div>`
};

export default AsideHomeComponent;