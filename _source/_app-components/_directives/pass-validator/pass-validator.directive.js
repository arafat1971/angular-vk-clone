// https://jsfiddle.net/arsenykonohov/cvf61m64/

"use strict";

class PassValidator {
    constructor() {
        this.restrict = "A";
        this.require  = "ngModel";
    }
    
    link(scope, elm, attrs, ctrl) {
        // ------------------------------------------------------------------------------------------
        console.log("=========================================");
        console.log(scope);
        console.log(elm);
        console.log(attrs);
        console.log(ctrl);
        
        // ------------------------------------------------------------------------------------------
        ctrl.$parsers.unshift(function (viewValue) {
            scope.pwdValidLength = (viewValue && viewValue.length >= 8)   ? "valid" : undefined;
            scope.pwdHasLetter   = (viewValue && /[A-z]/.test(viewValue)) ? "valid" : undefined;
            scope.pwdHasNumber   = (viewValue && /\d/.test(viewValue))    ? "valid" : undefined;
            // ------------------------------------------------------------------------------------------
            console.log("--------------------------------------");
            console.log(viewValue);
            console.log(scope.pwdHasLetter);
            console.log(scope.pwdHasNumber);
            console.log(scope.pwdValidLength);
            // ------------------------------------------------------------------------------------------
            if (scope.pwdValidLength && scope.pwdHasLetter && scope.pwdHasNumber) { 
                ctrl.$setValidity("pwd", true);
                return viewValue;
            } else {
                ctrl.$setValidity("pwd", false);
                return undefined;
            }
            // ------------------------------------------------------------------------------------------
        });
    }
}

export default PassValidator;



//<form ng-app="form-example" class="row form-horizontal" novalidate>
//    <div class="control-group">
//        <label class="control-label" for="inputEmail">Email</label>
//        <div class="controls">
//            <input type="email" id="inputEmail" placeholder="Email" ng-model="email" required>
//            <div class="input-help">
//                <h4>Invalid Email</h4>
//            </div>
//        </div>
//    </div>
//    <div class="control-group">
//        <label class="control-label" for="inputPassword">Password</label>
//        <div class="controls">
//            <input ng-model="password" class="immediate-help" password-validate required type="password" id="inputPassword" placeholder="Password">
//            <div class="input-help">
//                <h4>Password must meet the following requirements:</h4>
//                <ul>
//                    <li ng-class="pwdHasLetter">At least <strong>one letter</strong></li>
//                    <li ng-class="pwdHasNumber">At least <strong>one number</strong></li>
//                    <li ng-class="pwdValidLength">At least <strong>8 characters long</strong></li>
//                </ul>
//            </div>
//        </div>
//    </div>
//    <div class="control-group">
//        <div class="controls">
//            <button type="submit" class="btn">Create Account</button>
//            <button class="btn" disabled>Create Account</button>
//        </div>
//    </div>
//</form>