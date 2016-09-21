class UserProfileService {
    constructor($http) {
        this._$http = $http;
    }
    
    getUser() {
        return this._$http.get('../_api/users/user_profile.json').then(response => response.data);
    }
}

UserProfileService.$inject = ['$http'];


export default UserProfileService;