// UserProfileComponent / UserProfileComponent / UserProfileComponent / UserProfileComponent / UserProfileComponent /

import controller from './user-profile.controller.js';

const UserProfileComponent = {
    bindings: {
        id: "<"
    },
    controller,
    template: `
        <div class="">Profile: <span>{{$ctrl.id}}</span></div>
        <hr>
        <ui-view class=''></ui-view>
        <hr>`,
};

export default UserProfileComponent;

