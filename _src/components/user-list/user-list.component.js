// UserListComponent / UserListComponent / UserListComponent / UserListComponent / UserListComponent /

import controller from './user-list.controller.js';

const UserListComponent = {
    controller,
    template: `
        <div class="title">List of USERS:</div>
        <user-item class="user"
            ng-if="$ctrl._users.length"
            ng-repeat="user in $ctrl._users track by $index"
            user="user"></user-item>`,
};

export default UserListComponent;



            
            