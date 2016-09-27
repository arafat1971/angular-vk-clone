/*global angular */

"use strict";

import GiftItemComponent from "./gift-item/gift-item.component.js";

const GiftsModule = angular.module("GiftsModule", [])
    .component("giftItem", GiftItemComponent)
    .name;

export default GiftsModule;