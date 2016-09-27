"use strict";

import controller from "./user-profile.controller.js";



const UserProfileComponent = {
    bindings: {
        id: "<"
    },
    controller,
    template: `
        <div class="check_it_all">Profile: <span>{{$ctrl.id}}</span></div>
        <app-nav class="nav left"></app-nav>
        <ui-view class="main right"></ui-view>
        `
};

export default UserProfileComponent;




//        <ui-view class=""></ui-view>