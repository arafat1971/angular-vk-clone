"use strict";

class AppRootController {
    constructor($rootScope) {
        this.profileId = $rootScope.profileId;
        console.log("init: app-root.component ", this.profileId);
    }
    
    $onInit() {}
}

AppRootController.$inject = ["$rootScope"];

export default AppRootController;