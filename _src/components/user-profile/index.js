/*global angular */
import UserProfileService    from './user-profile.service.js';

import UserProfileComponent  from './user-profile.component.js';
import UserInfoComponent     from './user-info/user-info.component.js';
import UserSettingsComponent from './user-settings/user-settings.component.js';



const userProfile = angular.module('userProfile', ["ui.router"])
    .service('UserProfileService', UserProfileService)
    .component('userProfile',  UserProfileComponent)
    .component('userInfo',     UserInfoComponent)
    .component('userSettings', UserSettingsComponent)
    .name;


export default userProfile;