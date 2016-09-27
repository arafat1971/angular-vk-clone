/*global angular */

"use strict";

import AudioModule    from "./audio-module/index.js";
import DocsModule     from "./docs-module/index.js";
import FormModule     from "./forms-module/index.js";
import GamesModule    from "./games-module/index.js";
import GiftsModule    from "./gifts-module/index.js";
import GroupsModule   from "./groups-module/index.js";
import ImagesModule   from "./images-module/index.js";
import MenuModule     from "./menu-module/index.js";
import MessagesModule from "./messages-module/index.js";
import MoviesModule   from "./movies-module/index.js";
import NewsModule     from "./news-module/index.js";
import UserModule     from "./user-module/index.js";



const components = angular.module("app.components", [
        AudioModule,
        DocsModule,
        FormModule,
        GamesModule,
        GiftsModule,
        GroupsModule,
        ImagesModule,
        MenuModule,
        MessagesModule,
        MoviesModule,
        NewsModule,
        UserModule
    ])
    .name;

export default components;