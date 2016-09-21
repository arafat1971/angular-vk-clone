// ImageListComponent / ImageListComponent / ImageListComponent / ImageListComponent / ImageListComponent /

import controller from './image-list.controller.js';

const ImageListComponent = {
    controller,
    template: `
        <div class="title">List of IMAGES:</div>
        <image-item class="image"
            ng-if="$ctrl._images.length"
            ng-repeat="image in $ctrl._images track by $index"
            image="image"></image-item>`,
};

export default ImageListComponent;