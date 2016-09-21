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
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.home", {
            url: "/",
            template: `
                <aside-home   class="aside"></aside-home>
                <content-home class="content"></content-home>
            `,
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.news", {
            url: "/news",
            template: `
                <content-news class="content"></content-news>
                <aside-news   class="aside"></aside-news>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.messages", {
            url: "/messages",
            template: `
                <content-messages class="content"></content-messages>
                <aside-messages   class="aside"></aside-messages>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.friends", {
            url: "/friends",
            template: `
                <content-friends class="content"></content-friends>
                <aside-friends   class="aside"></aside-friends>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.groups", {
            url: "/groups",
            template: `
                <content-groups class="content"></content-groups>
                <aside-groups   class="aside"></aside-groups>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.images", {
            url: "/images",
            template: `
                <content-images class="content"></content-images>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.audio", {
            url: "/audio",
            template: `
                <content-audio class="content"></content-audio>
                <aside-audio   class="aside"></aside-audio>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.movies", {
            url: "/movies",
            template: `
                <content-movie></content-movie>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.games", {
            url: "/games",
            template: `
                <content-games></content-games>
            `
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