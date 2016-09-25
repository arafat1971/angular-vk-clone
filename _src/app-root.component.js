'use strict';

const AppRootComponent = {
    template: `
        <app-top class="page__container top"></app-top>
        <div class="page__container general">
            <app-nav class="nav"></app-nav>
            <ui-view class="main"></ui-view>
        </div>
        `
};

export default AppRootComponent;
