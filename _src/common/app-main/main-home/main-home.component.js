'use strict';

const MainHomeComponent = {
    template: `
        <div class="aside left">
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
                <hr />
                <div class="aside__head">Friends online</div>
                <user-friends class="aside__body">users-friends</user-friends>
            </div>
            <div class="aside__container">
                <div class="aside__head">Publics</div>
                <user-publics class="aside__body">user-publics</user-publics>
                <hr />
                <div class="aside__head">Pictures</div>
                <user-albums class="aside__body">user-albums</user-albums>
                <hr />
                <div class="aside__head">Movies</div>
                <user-albums class="aside__body">user-albums</user-albums>
                <hr />
                <div class="aside__head">Audio</div>
                <user-audio class="aside__body">user-audio</user-audio>
            </div>
        </div>

        <div class="content right">
            <div class="content__container">
                <user-info></user-info>
            </div>
            <div class="content__container">
                <add-pic class="form">FORM (add pic)</add-pic>
            </div>
            <div class="content__container">
                <add-news class="form">FORM (add news)</add-news>
            </div>
            <div class="content__container">
                <post-list></post-list>
            </div>
        </div>
        `
};

export default MainHomeComponent;