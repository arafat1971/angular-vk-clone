"use strict";

import controller from "./app-root.controller.js";
import template   from "./app-root.tmp.html";

import "./style.reset.css";
import "./style.app.css";
import "./style.top.css";
import "./style.general.css";

const AppRootComponent = {
    controller,
    template,
};

export default AppRootComponent;