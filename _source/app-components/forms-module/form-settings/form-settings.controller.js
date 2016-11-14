"use strict";

class UserSettingsController {
    constructor() {
        // console.log("UserSettingsController");
    }
    $onInit() {
        this.visibilityData = {};
        this.changeData = {};
        this.changePass = {
            letters: false
        };
        this.changeInputPassType(this.letters);
    }

    submitVisibilityForm(isValid) {
        isValid ? console.log("Visibility valid") : console.log("Visibility invalid"); 
         console.log(this);
    }
    submitChangeDataForm(isValid) {
        isValid ? console.log("ChangeData valid") : console.log("ChangeData invalid"); 
         console.log(this);
    }

    // ====================================================================================
    // Password FORM settings:
    submitChangePassForm(isValid) {
        isValid ? console.log("ChangePass valid") : console.log("ChangePass invalid"); 
        console.log(this);
    }
    changeInputPassType(letters) {
        return letters ? "text": "password";
    }
}

export default UserSettingsController;