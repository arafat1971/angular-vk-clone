'use strict';

import controller from './page-nav.controller.js';

const pageNavComponent = {
    controller,
    template: `
    <div class="nav__container">
        <div class="nav__head">PAGE-NAV</div>
        <div class="nav__body menu">
            <ul class="menu__list">
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.about({profileId:$ctrl.id})">about</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.images({profileId:$ctrl.id})">images</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.movies({profileId:$ctrl.id})">movies</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.posts({profileId:$ctrl.id})">posts</a>
                </li>
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.friends({profileId:$ctrl.id})">friends</a>
                </li>
            </ul>
        </div>
        <div class="nav__foot">
            <ul class="menu__list">
                <li class="menu__item">
                    <a class="link" ui-sref-active="active" ui-sref="profile.settings({profileId:$ctrl.id})">settings</a>
                </li>
            </ul>
        </div>
    </div>`
};

export default pageNavComponent;






