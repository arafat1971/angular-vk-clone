/*global angular */

import ImageListService from './image-list.service.js';

import ImageListComponent from './image-list.component.js';
import ImageItemComponent from './image-item/image-item.component.js';


const ImageList = angular.module('ImageList', [])

    .service('ImageListService', ImageListService)

    .component('imageList', ImageListComponent)
    .component('imageItem', ImageItemComponent)
    .name;




export default ImageList;