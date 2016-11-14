"use strict";

class AppProfileService {
    constructor($http) {
        this._$http = $http;
    }

    getUser(url) {
        return this._$http.get(url).then(response => response.data);
    }
}


AppProfileService.$inject = ["$http"];

export default AppProfileService;