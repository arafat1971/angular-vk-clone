"use strict";

import controller from "./app-profile.controller.js";
import template   from "./app-profile.tmp.html";
import "./style.profile.css";

const AppProfileComponent = {
    bindings: {
        profid: "<"
    },
    controller,
    template
};

export default AppProfileComponent;