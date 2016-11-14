"use strict";

class AppProfileController {
    constructor(AppProfileService) {
        this._AppProfileService = AppProfileService;
        console.log("init: app-profile.component");
    }
    
    $onInit() {
        this._user = {};
        
        this._AppProfileService.getUser("../../_api/users/user_profile.json").then((response) => {
            return this._user = response;
        });
    }
}

AppProfileController.$inject = ["AppProfileService"];

export default AppProfileController;