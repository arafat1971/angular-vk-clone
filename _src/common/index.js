/*global angular */
"use strict";

import pageTopComponent     from './page-top/page-top.component.js';
import pageNavComponent     from './page-nav/page-nav.component.js';

import pageMainComponent    from './page-main/page-main.component.js';
import mainAsideComponent   from './page-main/main-aside/main-aside.component.js';
import mainContentComponent from './page-main/main-content/main-content.component.js';


const common = angular.module('app.common', [])

    .component('pageTop',     pageTopComponent)
    .component('pageNav',     pageNavComponent)
    .component('pageMain',    pageMainComponent)
    .component('mainAside',   mainAsideComponent)
    .component('mainContent', mainContentComponent)
    .name;

export default common;