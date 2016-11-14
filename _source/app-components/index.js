"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
//import CustomFilters    from "./_custom-filters/index.js";
//import UserDirectives    from "./_directives/index.js";
import AppAudioModule    from "./audio-module/index.js";
import AppDocsModule     from "./docs-module/index.js";
import AppFormModule     from "./forms-module/index.js";
import AppGamesModule    from "./games-module/index.js";
import AppGiftsModule    from "./gifts-module/index.js";
import AppGroupsModule   from "./groups-module/index.js";
import AppImagesModule   from "./images-module/index.js";
import AppMenuModule     from "./menu-module/index.js";
import AppMessagesModule from "./messages-module/index.js";
import AppMoviesModule   from "./movies-module/index.js";
import AppNewsModule     from "./news-module/index.js";
import AppUserModule     from "./user-module/index.js";



const AppComponentsModule = angular.module("AppComponentsModule", [
//        AppAudioModule,
//        AppDocsModule,
//        AppFormModule,
//        AppGamesModule,
//        AppGiftsModule,
//        AppGroupsModule,
//        AppImagesModule,
//        AppMenuModule,
//        AppMessagesModule,
//        AppMoviesModule,
//        AppNewsModule,
//        AppUserModule
    ])
    .name;

export default AppComponentsModule;