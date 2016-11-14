/*global angular */

"use strict";

import GameItemComponent from "./game-item/game-item.component.js";


const GamesModule = angular.module("GamesModule", [])
    .component("gameItem", GameItemComponent)
    .name;

export default GamesModule;