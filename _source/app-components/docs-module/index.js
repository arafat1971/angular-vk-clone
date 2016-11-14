/*global angular */

"use strict";

import DocItemComponent from "./doc-item/doc-item.component.js";

const DocsModule = angular.module("DocsModule", [])
    .component("docItem", DocItemComponent)
    .name;

export default DocsModule;