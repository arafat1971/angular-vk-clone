/*global angular */

"use strict";

import ImageItemComponent from "./image-item/image-item.component.js";
import AlbumItemComponent from "./album-item/album-item.component.js";


const ImagesModule = angular.module("ImagesModule", [])
    .component("imageItem", ImageItemComponent)
    .component("albumItem", AlbumItemComponent)
    .name;

export default ImagesModule;