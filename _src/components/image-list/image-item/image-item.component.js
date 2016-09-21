// ImageItemComponent / ImageItemComponent / ImageItemComponent / ImageItemComponent / ImageItemComponent /

import controller from './image-item.controller.js';

const ImageItemComponent = {
    bindings: {
        image: '<'
    },
    controller,
    template: `
    <div class="image__container">
        <div class="image__head">{{$ctrl.image.title}}</div>
        <div class="image__body">
            <img ng-src="{{$ctrl.image.url}}" alt="image-view"/>
        </div>
        <div class="image__foot">
            {{$ctrl.image.description}}
        </div>
    </div>`,
};
export default ImageItemComponent;