/*global angular */

"use strict";


import AsideHomeComponent     from './aside-home/aside-home.component.js';
import AsideAudioComponent    from './aside-audio/aside-audio.component.js';
import AsideFriendsComponent  from './aside-friends/aside-friends.component.js';
import AsideGamesComponent    from './aside-games/aside-games.component.js';     // none
import AsideGroupsComponent   from './aside-groups/aside-groups.component.js';
import AsideImagesComponent   from './aside-images/aside-images.component.js';   // none
import AsideMoviesComponent   from './aside-movies/aside-movies.component.js';   // none
import AsideMessagesComponent from './aside-messages/aside-messages.component.js';
import AsideNewsComponent     from './aside-news/aside-news.component.js';



const appAside = angular.module('appAside', [])
    .component('asideAudio',    AsideAudioComponent)
    .component('asideFriends',  AsideFriendsComponent)
    .component('asideGames',    AsideGamesComponent)
    .component('asideGroups',   AsideGroupsComponent)
    .component('asideHome',     AsideHomeComponent)
    .component('asideImages',   AsideImagesComponent)
    .component('asideMovies',   AsideMoviesComponent)
    .component('asideMessages', AsideMessagesComponent)
    .component('asideNews',     AsideNewsComponent)
    .name;

export default appAside;