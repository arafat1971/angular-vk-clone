"use strict";

import controller from "./user-profile.controller.js";


const UserProfileComponent = {
    bindings: {
        profid: "<"
    },
    controller,
    template: `
        <div class="check_it_all">Profile: <span>{{$ctrl.profid}}</span></div>
        <app-nav class="nav left"></app-nav>
        <ui-view class="main right"></ui-view>
        `
};

export default UserProfileComponent;