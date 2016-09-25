/*global angular */

"use strict";

import NewsItemComponent from "./news-item/news-item.component.js";


const NewsModule = angular.module("NewsModule", [])
    .component("newsItem", NewsItemComponent)
    .name;

export default NewsModule;