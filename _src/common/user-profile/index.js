/*global angular */

"use strict";

import AppTop  from "./app-top/index.js";
import AppNav  from "./app-nav/index.js";
import AppMain from "./app-main/index.js";

import UserProfileService   from "./user-profile.service.js";
import UserProfileComponent from "./user-profile.component.js";



const UserProfileModule = angular.module("UserProfileModule", [
        AppTop,
        AppNav,
        AppMain,
        "ui.router"
    ])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
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
        // ==================================================================================
        $stateProvider.state("profile.settings", {
            url: "/settings",
            template: `<form-settings class="main__container"></form-settings>`
        });
    })

    .service("UserProfileService", UserProfileService)
    .component("userProfile",      UserProfileComponent)
    .name;

export default UserProfileModule;


















