/*global angular */

"use strict";

import AppNavComponent from "./app-nav.component.js";

const appNav = angular.module("appNav", [])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        // $locationProvider.html5Mode(true); // Rremove hash from url:
        $urlRouterProvider.otherwise("/");
        
        
        // ===============================================================
        // logged user:
        $stateProvider.state("profile", {
            url: "/:profileId",
            template: `<user-profile class="main__container" id="$ctrl.profileId"></user-profile>`,
            controller: function($stateParams) {
                this.profileId = $stateParams.profileId;
            },
            controllerAs: "$ctrl"
        });
        
        $stateProvider.state("profile.audio", {
            url: "/audio",
            template: `<main-audio class="main__container"></main-audio>`
        });
        
        $stateProvider.state("profile.friends", {
            url: "/friends",
            template: `<main-friends class="main__container"></main-friends>`
        });
        
        $stateProvider.state("profile.games", {
            url: "/games",
            template: `<main-games class="main__container"></main-games>`
        });
        
        $stateProvider.state("profile.groups", {
            url: "/groups",
            template: `<main-groups class="main__container"></main-groups>`
        });
        
        $stateProvider.state("profile.home", {
            url: "/",
            template: `<main-home class="main__container"></main-home>`
        });
        
        $stateProvider.state("profile.images", {
            url: "/images",
            template: `<main-images class="main__container"></main-images>`
        });
        
        $stateProvider.state("profile.messages", {
            url: "/messages",
            template: `<main-messages class="main__container"></main-messages>`
        });
        
        $stateProvider.state("profile.movies", {
            url: "/movies",
            template: `<main-movies class="main__container"></main-movies>`
        });
        
        $stateProvider.state("profile.news", {
            url: "/news",
            template: `<main-news class="main__container"></main-news>`
        });
        
        
        
        // ===============================================================
        $stateProvider.state("profile.settings", {
            url: "/settings",
            template: `<user-settings></user-settings>`
        });
    })

    .component('appNav', AppNavComponent)
    .name;

export default appNav;