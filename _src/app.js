/*global angular */

"use strict";

import AppRootComponent from "./app-root.component.js";
import Components       from "./components/index.js";
import Common           from "./common/index.js";



module.export = angular.module("vkClone", [
        Common,
        Components,
        "ui.router"
    ])

    .run(($rootScope, $state) => {
        $rootScope.profileId = "mr-heisenberg";
        //$state.go("profile.home", {profileId: $rootScope.profileId}, {location: true});
    })

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        // $locationProvider.html5Mode(true); // Rremove hash from url:

        // -----------------------------------------------------------------------------------------------------
        $urlRouterProvider.otherwise(function ($injector, $location) {
            var $state     = $injector.get("$state"),
                $rootScope = $injector.get("$rootScope");
            try {
                if (!$rootScope.profileId) {
                    $state.go("login");
                } else {
                    $state.go("profile.home", {profileId: $rootScope.profileId}, {location: true});
                }
            } catch (e) {
                return "/login"
            }
        });

        // -----------------------------------------------------------------------------------------------------
        $stateProvider.state("login", {
            url: "/login",
            template: `
                <user-login
                    class="general__container wrapper login">
                </user-login>`
        });

        // -----------------------------------------------------------------------------------------------------
        $stateProvider.state("profile", {
            url: "/:profileId",
            abstract: true,
            resolve: {
                _users: function () {console.log("resolve: USER");}
            },
            template: `
                <user-profile 
                    profid="$ctrl.profileId"
                    class="general__container wrapper profile">
                </user-profile>
                `,
            controller: function ($stateParams) {
                this.profileId = $stateParams.profileId;
            },
            controllerAs: "$ctrl"
        });
    })

    .component("appRoot", AppRootComponent)
    .name;



















