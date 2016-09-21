"use strict";

import controller from './menu-list.controller.js';

const MenuListComponent = {
    controller,
    template: `
        <div class="menu__container">
            <div class="menu__head"></div>
            <div class="menu__body">
                <ul class="menu__list">
                    <li class="menu__item" ng-repeat="item in [1,2,3,4,5,6] track by $index">
                        <a class="link">link</a>
                    </li>
                </ul>
            </div>
            <div class="menu__foot"></div>
        </div>`,
};

export default MenuListComponent;


