"use strict";

class MenuListController {
    constructor(MenuListService) {
        this._MenuListService = MenuListService;
    }
    
    $onInit() {
        this._menus = [];
        
//        this._MenuListService.getMenuList().then((response) => {
//            console.log(response.menus);
//            return this._menus = response.menus;
//        });
    }
}

MenuListController.$inject = ['MenuListService'];

export default MenuListController;