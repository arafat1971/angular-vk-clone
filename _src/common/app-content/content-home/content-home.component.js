'use strict';

const ContentHomeComponent = {
    template: `
        <div class="content__container">
            <user-info></user-info>
        </div>

        <div class="content__container">
            <add-pic class="form">FORM (add pic)</add-pic>
        </div>

        <div class="content__container">
            <add-news class="form">FORM (add news)</add-news>
        </div>

        <div class="content__container">
            <post-list></post-list>
        </div>`
};

export default ContentHomeComponent;