/*global angular */
import PostListService   from './post-list.service.js';
import PostListComponent from './post-list.component.js';
import PostItemComponent from './post-item/post-item.component.js';

const PostList = angular.module('PostList', [])

    .service('PostListService', PostListService)

    .component('postList', PostListComponent)
    .component('postItem', PostItemComponent)

    .name;

export default PostList;