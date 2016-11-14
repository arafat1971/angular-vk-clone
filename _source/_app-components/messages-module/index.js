/*global angular */

"use strict";

import MessageItemComponent from "./message-item/message-item.component.js";


const MessagesModule = angular.module("MessagesModule", [])
    .component("messageItem", MessageItemComponent)
    .name;

export default MessagesModule;