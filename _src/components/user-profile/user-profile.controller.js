class UserProfileController {
    constructor(UserProfileService) {
        this._UserProfileService = UserProfileService;
        //console.log(this);
    }
    
    $onInit() {
        this._user = {};
        
        this._UserProfileService.getUser().then((response) => {
            //console.log(response);
            return this._user = response;
        });
    }
}

UserProfileController.$inject = ['UserProfileService'];



export default UserProfileController;