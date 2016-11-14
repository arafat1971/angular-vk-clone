"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import MainAudioModule     from './main-audio/index.js';
//import MainFriendsModule   from './main-friends/index.js';
//import MainGamesModule     from './main-games/index.js';
//import MainGroupsModule    from './main-groups/index.js';
//import MainHomeModule      from './main-home/index.js';
//import MainImagesModule    from './main-images/index.js';
//import MainMessagesModule  from './main-messages/index.js';
//import MainMoviesModule    from './main-movies/index.js';
//import MainNewsModule      from './main-news/index.js';
//import MainBookmarksModule from './main-bookmarks/index.js';
//import MainDocsModule      from './main-docs/index.js';
// ---------------------------------------------------------------
import './style.main.css';
import './style.aside.css';
import './style.content.css';



const AppMainModule = angular.module('AppMainModule', [
    MainAudioModule
//    MainFriendsModule,
//    MainGamesModule,
//    MainGroupsModule,
//    MainHomeModule,
//    MainImagesModule,
//    MainMessagesModule,
//    MainMoviesModule,
//    MainNewsModule,
//    MainBookmarksModule,
//    MainDocsModule
])
.name;

export default AppMainModule;