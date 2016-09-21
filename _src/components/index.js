/*global angular */

'use strict';


import MenuList    from './menu-list/index.js';

import userList    from './user-list/index.js';
import userProfile from './user-profile/index.js';
import imageList   from './image-list/index.js';
import movieList   from './movie-list/index.js';
import postList    from './post-list/index.js';


const components = angular.module('app.components', [
        MenuList,
        userList,
        userProfile,
        imageList,
        movieList,
        postList
    ])
    .name;

export default components;

