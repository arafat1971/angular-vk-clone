// PostListComponent / PostListComponent / PostListComponent / PostListComponent / PostListComponent /

import controller from './post-list.controller.js';

const PostListComponent = {
    controller,
    template: `
        <div class="title">List of POSTS:</div>
        <post-item class="post"
            ng-if="$ctrl._posts.length"
            ng-repeat="post in $ctrl._posts track by $index"
            post="post"></post-item>`,
};

export default PostListComponent;