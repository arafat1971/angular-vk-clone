// UserProfileComponent / UserProfileComponent / UserProfileComponent / UserProfileComponent / UserProfileComponent /

import controller from './user-settings.controller.js';

const UserSettingsComponent = {
    controller,
    template: `
    <form class="form" name="usVisibilityForm" ng-submit="$ctrl.submitVisibilityForm(usVisibilityForm.$valid)" novalidate>
        <div class="form__container">
            <div class="form__head title">Visibility for your account:</div>
            <div class="form__body">
                <div class="form__row">
                    <div class="form__col"><label for="hide_profile">Hide profile</label></div>
                    <div class="form__col">
                        <input id="hide_profile"
                            type="checkbox"
                            name="profile"
                            ng-model="$ctrl.visibilityData.profile" />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col"><label for="hide_images">Hide images</label></div>
                    <div class="form__col">
                        <input id="hide_images"
                            type="checkbox"
                            name="images"
                            ng-model="$ctrl.visibilityData.images" />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col"><label for="hide_movies">Hide movies</label></div>
                    <div class="form__col">
                        <input id="hide_movies"
                            type="checkbox"
                            name="movies"
                            ng-model="$ctrl.visibilityData.movies" />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col"><label for="hide_friends">Hide friends</label></div>
                    <div class="form__col">
                        <input id="hide_friends"
                            type="checkbox"
                            name="friends"
                            ng-model="$ctrl.visibilityData.friends" />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col">
                        <button class="btn btn_success"
                            type="submit"
                            ng-disabled="usVisibilityForm.$invalid"
                            disabled>submit</button>
                    </div>
                    <div class="form__col">
                        <div class="btn">clear</div>
                    </div>
                </div>
            </div>
            <div class="form__foot">
                <pre>{{$ctrl.visibilityData}}</pre>
            </div>
        </div>
    </form>


    <form class="form" name="usChangeDataForm" ng-submit="$ctrl.submitChangeDataForm(usChangeDataForm.$valid)" novalidate>
        <div class="form__container">
            <div class="form__head title">Change login & email:</div>
            <div class="form__body">
                <div class="form__row">
                    <div class="form__col"><label for="change_username">New username</label></div>
                    <div class="form__col">
                        <input id="change_username" type="text" name="username" ng-model="$ctrl.changeData.username" ng-minlength="3" ng-maxlength="12" />
                        <p class="form__error" ng-show="usChangeDataForm.username.$error.minlength">
                            username is too small
                        </p>
                        <p class="form__error" ng-show="usChangeDataForm.username.$error.maxlength">
                            username is too large
                        </p>
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col"><label for="change_email">New email</label></div>
                    <div class="form__col">
                        <input id="change_email" type="text" name="profile" ng-model="$ctrl.changeData.email" />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col"><label for="id_url_alias">Id URL alias</label></div>
                    <div class="form__col">
                        <input id="id_url_alias" type="text" name="profile" ng-model="$ctrl.changeData.alias" />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col">
                        <button class="btn btn_success"
                            type="submit"
                            ng-disabled="usChangeDataForm.$invalid"
                            disabled>submit</button>
                    </div>
                    <div class="form__col">
                        <div class="btn">clear</div>
                    </div>
                </div>
            </div>
            <div class="form__foot">
                <pre>{{$ctrl.changeData}}</pre>
            </div>
        </div>
    </form>


    <form class="form" name="usChangePassForm" ng-submit="$ctrl.submitChangePassForm(usChangePassForm.$valid)" novalidate>
        <div class="form__container">
            <div class="form__head title">Change password:</div>
            <div class="form__body">
                <div class="form__row">
                    <div class="form__col"><label for="hide_letters">Show characters</label></div>
                    <div class="form__col">
                        <input id="hide_letters" type="checkbox" name="letters" ng-model="$ctrl.changePass.letters"/>
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col"><label for="old_pass">Old password</label></div>
                    <div class="form__col">
                        <input id="old_pass"
                        type="{{$ctrl.changeInputPassType($ctrl.changePass.letters)}}"
                        name="old_pass"
                        ng-model="$ctrl.changePass.oldPass"
                        required />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col"><label for="new_pass_1">New password</label></div>
                    <div class="form__col">
                        <input id="new_pass_1"
                        type="{{$ctrl.changeInputPassType($ctrl.changePass.letters)}}"
                        name="new_pass"
                        ng-model="$ctrl.changePass.newPass"
                        required />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col"><label for="new_pass_2">Repeat new password</label></div>
                    <div class="form__col">
                        <input id="new_pass_2"
                        type="{{$ctrl.changeInputPassType($ctrl.changePass.letters)}}"
                        name="new_again"
                        ng-model="$ctrl.changePass.newAgain"
                        required />
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__col">
                        <button class="btn btn_success"
                            type="submit"
                            ng-disabled="usChangePassForm.$invalid"
                            disabled>submit</button>
                    </div>
                    <div class="form__col">
                        <div class="btn">clear</div>
                    </div>
                </div>
            </div>
            <div class="form__foot">
                <div class="form__row">
                    <div class="form__col">
                        <div class="state" ng-class="{valid    : usChangePassForm.old_pass.$valid}"></div>
                        <div class="state" ng-class="{invalid  : usChangePassForm.old_pass.$invalid}"></div>
                        <div class="state" ng-class="{pristine : usChangePassForm.old_pass.$pristine}"></div>
                        <div class="state" ng-class="{dirty    : usChangePassForm.old_pass.$dirty}"></div>
                        <div class="state" ng-class="{touched  : usChangePassForm.old_pass.$touched}"></div>
                    </div>
                    <div class="form__col">
                        <div class="state" ng-class="{valid    : usChangePassForm.new_pass.$valid}"></div>
                        <div class="state" ng-class="{invalid  : usChangePassForm.new_pass.$invalid}"></div>
                        <div class="state" ng-class="{pristine : usChangePassForm.new_pass.$pristine}"></div>
                        <div class="state" ng-class="{dirty    : usChangePassForm.new_pass.$dirty}"></div>
                        <div class="state" ng-class="{touched  : usChangePassForm.new_pass.$touched}"></div>
                    </div>
                    <div class="form__col">
                        <div class="state" ng-class="{valid    : usChangePassForm.new_again.$valid}"></div>
                        <div class="state" ng-class="{invalid  : usChangePassForm.new_again.$invalid}"></div>
                        <div class="state" ng-class="{pristine : usChangePassForm.new_again.$pristine}"></div>
                        <div class="state" ng-class="{dirty    : usChangePassForm.new_again.$dirty}"></div>
                        <div class="state" ng-class="{touched  : usChangePassForm.new_again.$touched}"></div>
                    </div>
                </div>
                <pre>{{$ctrl.changePass}}</pre>
            </div>
        </div>
    </form>`,
};

export default UserSettingsComponent;




