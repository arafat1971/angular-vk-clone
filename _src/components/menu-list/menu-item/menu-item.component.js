"use strict";

import controller from './menu-item.controller.js';

const MenuItemComponent = {
    bindings: {
        item: '<'
    },
    controller,
    template: `
        <div class="item__container">
            <div class="item__head">h</div>
            <div class="item__body">b
                <a>hrf</a>
            </div>
            <div class="item__foot">f</div>
        </div>`,
};
export default MenuItemComponent;




//    <div class="image__container">
//        <div class="image__head">{{$ctrl.image.title}}</div>
//        <div class="image__body">
//            <img ng-src="{{$ctrl.image.url}}" alt="image-view"/>
//        </div>
//        <div class="image__foot">
//            {{$ctrl.image.description}}
//        </div>
//    </div>`,






