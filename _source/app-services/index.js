"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import ServicesConfig from "./app-services.config.js";
// ---------------------------------------------------------------
import AuthByEventService    from "./auth-services/auth-event.service.js";
import AuthByResolveService  from "./auth-services/auth-resolve.service.js";
import RejectInterceptor     from "./auth-services/reject-interceptor.service.js";
import CookieStorageService  from "./storage-services/cookie-storage.service.js";
import LocalStorageService   from "./storage-services/local-storage.service.js";
import SessionStorageService from "./storage-services/session-storage.service.js";
import AppProfileService     from "./profile-services/app-profile.service.js";
//import MainAudioService   from "./main-audio.service";
//import MainBookmarksService   from './main-bookmarks.service';



const AppServicesModule = angular.module("AppServicesModule", [])
.config(ServicesConfig)
.service("AuthByEventService", AuthByEventService)
.service("AuthByResolveService", AuthByResolveService)
.service("RejectInterceptor", RejectInterceptor)
.service("CookieStorageService", CookieStorageService)
.service("LocalStorageService", LocalStorageService)
.service("SessionStorageService", SessionStorageService)
.service("AppProfileService", AppProfileService)
.name;

export default AppServicesModule;