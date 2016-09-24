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
                <aside-home   class="aside left"></aside-home>
                <content-home class="content right"></content-home>
            `,
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.audio", {
            url: "/audio",
            template: `
                <content-audio class="content left"></content-audio>
                <aside-audio   class="aside right"></aside-audio>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.friends", {
            url: "/friends",
            template: `
                <content-friends class="content left"></content-friends>
                <aside-friends   class="aside right"></aside-friends>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.games", {
            url: "/games",
            template: `
                <content-games class="content full"></content-games>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.news", {
            url: "/news",
            template: `
                <content-news class="content left"></content-news>
                <aside-news   class="aside right"></aside-news>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.messages", {
            url: "/messages",
            template: `
                <content-messages class="content left"></content-messages>
                <aside-messages   class="aside right"></aside-messages>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.groups", {
            url: "/groups",
            template: `
                <content-groups class="content left"></content-groups>
                <aside-groups   class="aside right"></aside-groups>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.images", {
            url: "/images",
            template: `
                <content-images class="content full"></content-images>
            `
        });
        
        // ----------------------------------------------------------
        $stateProvider.state("profile.movies", {
            url: "/movies",
            template: `
                <content-movies class="content full"></content-movies>
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