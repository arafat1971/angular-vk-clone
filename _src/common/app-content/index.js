/*global angular */

"use strict";


import ContentHomeComponent     from './content-home/content-home.component.js';
import ContentAudioComponent    from './content-audio/content-audio.component.js';
import ContentFriendsComponent  from './content-friends/content-friends.component.js';
import ContentGamesComponent    from './content-games/content-games.component.js';
import ContentGroupsComponent   from './content-groups/content-groups.component.js';
import ContentImagesComponent   from './content-images/content-images.component.js';
import ContentMessagesComponent from './content-messages/content-messages.component.js';
import ContentMoviesComponent   from './content-movies/content-movies.component.js';
import ContentNewsComponent     from './content-news/content-news.component.js';



const appContent = angular.module('appContent', [])
    .component('contentHome',     ContentHomeComponent)
    .component('contentAudio',    ContentAudioComponent)
    .component('contentFriends',  ContentFriendsComponent)
    .component('contentGames',    ContentGamesComponent)
    .component('contentGroups',   ContentGroupsComponent)
    .component('contentImages',   ContentImagesComponent)
    .component('contentMessages', ContentMessagesComponent)
    .component('contentMovies',   ContentMoviesComponent)
    .component('contentNews',     ContentNewsComponent)
    .name;

export default appContent;