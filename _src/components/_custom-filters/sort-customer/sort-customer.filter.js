// https://stackoverflow.com/questions/31335099/ecmascript6-angularjs-filter
// ==========================================================================

"use strict";

class SortCustomer {
    constructor(items) {
        this.items = items;
    }
    myMethod() {
        let items = this.items || [];
        console.log("Run filter method:", items);
        return items;
    }
    static Factory(items) {
        let filter = new SortCustomer(items);
        return filter.myMethod();
    }
}

SortCustomer.Factory.$inject = ["items"];

export default SortCustomer;