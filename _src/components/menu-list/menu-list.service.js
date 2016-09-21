"use strict";

class MenuListService {
    constructor($http) {
        this._$http = $http;
    }
    
//    getMenuList() {
//        return this._$http.get('../_api/menu/menu_list.json').then(response => response.data);
//    }
}

MenuListService.$inject = ['$http'];

export default MenuListService;