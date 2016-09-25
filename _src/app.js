/*global angular */

"use strict";

import AppRootComponent from "./app-root.component.js";
import Components       from "./components/index.js";
import Common           from "./common/index.js";


module.export = angular
    .module("vkClone", [
        Common,
        Components,
    ])

    .run(($rootScope) => {
        //$rootScope.demo = "vk.com demo";
        $rootScope.profileId = "mr-heisenberg";
    })

    .component("appRoot", AppRootComponent)
    .name;