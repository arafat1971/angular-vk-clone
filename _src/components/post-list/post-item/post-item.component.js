// PostItemComponent / PostItemComponent / PostItemComponent / PostItemComponent / PostItemComponent /

import controller from './post-item.controller.js';

const PostItemComponent = {
    bindings: {
        post: '<'
    },
    controller,
    template: `
        <div class="post__container">
            <div class="post__head">{{$ctrl.post.title}}</div>
            <div class="post__body">{{$ctrl.post.description}}</div>
            <div class="post__foot">post foot</div>
        </div>`,
};

export default PostItemComponent;