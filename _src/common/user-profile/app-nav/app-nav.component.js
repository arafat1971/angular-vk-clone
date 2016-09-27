"use strict";

import controller from "./app-nav.controller.js";

const appNavComponent = {
    controller,
    template: `
        <div class="nav__container menu">
            <ul class="menu__list">
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.home({profileId:$ctrl.id})">my page</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.news({profileId:$ctrl.id})">news</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.messages({profileId:$ctrl.id})">messages</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.friends({profileId:$ctrl.id})">friends</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.groups({profileId:$ctrl.id})">groups</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.images({profileId:$ctrl.id})">images</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.audio({profileId:$ctrl.id})">audio</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.movies({profileId:$ctrl.id})">movies</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.games({profileId:$ctrl.id})">games</a>
                </li>
            </ul>
        </div>

        <div class="nav__container menu">
            <ul class="menu__list">
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.bookmarks({profileId:$ctrl.id})">bookmarks</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.docs({profileId:$ctrl.id})">documents</a>
                </li>
            </ul>
        </div>`
};

export default appNavComponent;







//                <li class="menu__item">
//                    <a class="link" ui-sref-active="active" ui-sref="profile.settings({profileId:$ctrl.id})">settings</a>
//                </li>