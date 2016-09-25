/*global angular */

"use strict";

import MainAudio    from './main-audio/index.js';
import MainFriends  from './main-friends/index.js';
import MainGames    from './main-games/index.js';
import MainGroups   from './main-groups/index.js';
import MainHome     from './main-home/index.js';
import MainImages   from './main-images/index.js';
import MainMessages from './main-messages/index.js';
import MainMovies   from './main-movies/index.js';
import MainNews     from './main-news/index.js';



const AppMain = angular.module('appMain', [
        MainAudio,
        MainFriends,
        MainGames,
        MainGroups,
        MainHome,
        MainImages,
        MainMessages,
        MainMovies,
        MainNews
    ])
    .name;

export default AppMain;