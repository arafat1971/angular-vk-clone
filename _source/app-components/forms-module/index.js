/*global angular */

"use strict";

import FormExampleComponent from "./form-example/form-example.component.js";
import formSettingsComponent from "./form-settings/form-settings.component.js";


const FormsModule = angular.module("FormsModule", [])
    .component("formExample", FormExampleComponent)
    .component("formSettings", formSettingsComponent)
    .name;

export default FormsModule;