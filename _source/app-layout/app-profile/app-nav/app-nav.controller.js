"use strict";

class appNavController {
    constructor($rootScope) {
        this.profileId = $rootScope.profileId;
        console.log("init: app-nav.component");
    }
}

export default appNavController;