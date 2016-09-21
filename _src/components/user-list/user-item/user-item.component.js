// UserItemComponent / UserItemComponent / UserItemComponent / UserItemComponent / UserItemComponent /

import controller from './user-item.controller.js';

const UserItemComponent = {
    bindings: {
        user: '<'
    },
    controller,
    template: `
        <div class="user__container">
            <div class="user__head">{{$ctrl.user.aliasName}}</div>
            <div class="user__body">
                <img ng-src="{{$ctrl.user.avatarUrl}}" alt="{{$ctrl.user.aliasName}}"/>
            </div>
            <div class="user__foot">{{$ctrl.user.fullName}}</div>
        </div>`,
};

export default UserItemComponent;