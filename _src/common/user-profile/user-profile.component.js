"use strict";

import controller from "./user-profile.controller.js";



const UserProfileComponent = {
    bindings: {
        id: "<"
    },
    controller,
    template: `
        <h3 class="">Profile: <span>{{$ctrl.id}}</span></h3>
        <ui-view class=""></ui-view>
        `
};

export default UserProfileComponent;