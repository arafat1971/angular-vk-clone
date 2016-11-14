"use strict";


class UserProfileController {
    constructor(UserProfileService) {
        this._UserProfileService = UserProfileService;
    }
    
    $onInit() {
        this._user = {};
        
        //console.log(this);
        
        this._UserProfileService.getUser().then((response) => {
            //console.log(response);
            return this._user = response;
        });
    }
}


UserProfileController.$inject = ["UserProfileService"];

export default UserProfileController;