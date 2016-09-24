'use strict';

const ContentNewsComponent = {
    template: `
        <div class="content__container">
            <add-news class="form">FORM (add news) + btns</add-news>
        </div>

        <hr />
        <div>REPEATED BLOCKS</div>
        <div class="content__container">
            <post-item></post-item>
        </div>

        <div class="content__container">
            <post-item></post-item>
        </div>

        <div class="content__container">
            <post-item></post-item>
        </div>
        lazy loading by scroll`
};

export default ContentNewsComponent;