// https://stackoverflow.com/questions/31335099/ecmascript6-angularjs-filter
// ==========================================================================

"use strict";

class ReverseLetter {
    constructor(input, uppercase) {
        this.input = input;
        this.uppercase = uppercase || false;
    }
    myMethod() {
        let input = this.input || '';
        let uppercase = this.uppercase || false;
        let out = '';
        for (let i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
    static Factory(input, uppercase) {
        let filter = new ReverseLetter(input, uppercase);
        return filter.myMethod();
    }
}
ReverseLetter.Factory.$inject = ["input", "uppercase"];

export default ReverseLetter;


//how to use ReverseLetter filter
//    <input ng-model="greeting" type="text">
//    <br> No filter: {{greeting}}
//    <br> Reverse: {{greeting|reverse}}
//    <br> Reverse + uppercase: {{greeting|reverse:true}}
//    <br> Reverse, filtered in controller: {{filteredGreeting}}
//    <br>