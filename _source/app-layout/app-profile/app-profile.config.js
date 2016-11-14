"use strict";

function AppProfileConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    console.log("CONFIG init: app-profile");
//    $stateProvider.state("profile.home", {
//        url: "/",
//        resolve: {
//            _news: function (_users) {
//                // you can add parent (_users) resolve and wait it before started this one;
//                // we have to inject here service for example: "UserService";
//                // return UserService.getUser(); // promise
//                console.log("resolve: HOME");
//            }
//        },
//        template: `<main-home class="main__container"></main-home>`
//    });
//
//    $stateProvider.state("profile.news", {
//        url: "/news",
//        resolve: {
//            _news: function (_users) {console.log("resolve: NEWS"); }
//        },
//        template: `<main-news class="main__container"></main-news>`
//    });
//
//    $stateProvider.state("profile.messages", {
//        url: "/messages",
//        resolve: {
//            _messages: function (_users) {console.log("resolve: MESSAGES"); }
//        },
//        template: `<main-messages class="main__container"></main-messages>`
//    });
//
//    $stateProvider.state("profile.friends", {
//        url: "/friends",
//        template: `<main-friends class="main__container"></main-friends>`
//    });
//
//    $stateProvider.state("profile.groups", {
//        url: "/groups",
//        template: `<main-groups class="main__container"></main-groups>`
//    });
//
//    $stateProvider.state("profile.images", {
//        url: "/images",
//        template: `<main-images class="main__container"></main-images>`
//    });
//
//    $stateProvider.state("profile.audio", {
//        url: "/audio",
//        template: `<main-audio class="main__container"></main-audio>`
//    });
//
//    $stateProvider.state("profile.movies", {
//        url: "/movies",
//        template: `<main-movies class="main__container"></main-movies>`
//    });
//
//    $stateProvider.state("profile.games", {
//        url: "/games",
//        template: `<main-games class="main__container"></main-games>`
//    });
//
//    $stateProvider.state("profile.bookmarks", {
//        url: "/bookmarks",
//        template: `<main-bookmarks class="main__container"></main-bookmarks>`
//    });
//
//    $stateProvider.state("profile.docs", {
//        url: "/documents",
//        template: `<main-docs class="main__container"></main-docs>`
//    });
//
//    $stateProvider.state("profile.settings", {
//        url: "/settings",
//        template: `<form-settings class="main__container"></form-settings>`
//    });
};

AppProfileConfig.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

export default AppProfileConfig;