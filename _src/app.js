/*global angular */

"use strict";

import AppRootComponent from "./app-root.component.js";
import Components       from "./components/index.js";
import Common           from "./common/index.js";


module.export = angular
    .module("vkClone", [
        Common,
        Components,
        "ui.router"
    ])
    .run(($rootScope) => {
        $rootScope.profileId = "mr-heisenberg";
    })
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        // $locationProvider.html5Mode(true); // Rremove hash from url:
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("login", {
            url: "/login",
            template: `<user-login class="general__container wrapper login"></user-login>`,
        });
        $stateProvider.state("profile", {
            url: "/:profileId",
            template: `<user-profile class="general__container wrapper profile" id="$ctrl.profileId"></user-profile>`,
            controller: function($stateParams) {
                this.profileId = $stateParams.profileId;
            },
            controllerAs: "$ctrl"
        });
    })
    .component("appRoot", AppRootComponent)
    .name;

