/*global angular */

"use strict";

import ContentHomeComponent from './content-home/content-home.component.js';

const appContent = angular.module('appContent', [])

    .component('contentHome', ContentHomeComponent)
    .name;

export default appContent;