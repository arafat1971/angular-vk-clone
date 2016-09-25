/*global angular */

"use strict";

import ImageItemComponent from "./image-item/image-item.component.js";


const ImagesModule = angular.module("ImagesModule", [])
    .component("imageItem", ImageItemComponent)
    .name;

export default ImagesModule;