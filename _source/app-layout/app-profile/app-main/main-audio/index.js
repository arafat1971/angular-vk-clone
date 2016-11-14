"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
import uiRouter from "angular-ui-router";
// ---------------------------------------------------------------
import MainAudioComponent from "./main-audio.component";


const MainAudioModule = angular.module("MainAudioModule", [
    uiRouter
])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {})
.component("mainAudio", MainAudioComponent)
.name;

export default MainAudioModule;