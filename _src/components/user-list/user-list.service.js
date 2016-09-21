class UserListService {
    constructor($http) {
        this._$http = $http;
    }
    
    getUserList() {
        return this._$http.get('../_api/users/user_list.json').then(response => response.data);
    }
}

UserListService.$inject = ['$http'];


export default UserListService;