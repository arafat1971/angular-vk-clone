class UserListController {
    constructor(UserListService) {
        this._UserListService = UserListService;
    }
    
    $onInit() {
        this._users = [];
        
        this._UserListService.getUserList().then((response) => {
            //console.log(response.users);
            return this._users = response.users;
        });
    }
}

UserListController.$inject = ['UserListService'];

export default UserListController;