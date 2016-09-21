/*global angular */
"use strict";

import pageNavComponent     from './page-nav.component.js';

const pageNav = angular.module('pageNav', [])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        // $locationProvider.html5Mode(true); // Rremove hash from url:
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("profile", {
            url: "/:profileId",
            template: `
                <user-profile id='$ctrl.profileId'></user-profile>`,
            controller: function($stateParams) {
                this.profileId = $stateParams.profileId;
            },
            controllerAs: "$ctrl"
        });
        $stateProvider.state("profile.about", {
            url: "/",
            template: `
                <hr>
                <user-info></user-info>
                <hr>
                <post-list></post-list>
                <hr>`,
        });
        $stateProvider.state("profile.images", {
            url: "/images",
            template: "<image-list></image-list>"
        });
        $stateProvider.state("profile.movies", {
            url: "/movies",
            template: "<movie-list></movie-list>"
        });
        $stateProvider.state("profile.posts", {
            url: "/posts",
            template: "<post-list></post-list>"
        });
        $stateProvider.state("profile.friends", {
            url: "/friends",
            template: "<user-list></user-list>"
        });
        $stateProvider.state("profile.settings", {
            url: "/settings",
            template: "<user-settings></user-settings>"
        });
    })
    .component('pageNav',     pageNavComponent)
    .name;

export default pageNav;