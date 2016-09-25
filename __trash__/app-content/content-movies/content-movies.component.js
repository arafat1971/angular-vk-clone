'use strict';

const ContentMoviesComponent = {
    template: `
        <div class="content__container">
            <div class="content__head">HEAD (menu + router)</div>
            <div class="form">FORM</div>

            <hr />
            <div class="content__head">HEAD (title)</div>
            <div class="content__body">CAROUSEL</div>

            <hr />
            <div class="content__head">HEAD (title)</div>
            <div class="content__body">LIST | ITEM</div>

            <hr />
            <div class="content__head">HEAD (title)</div>
            <div class="content__body">LIST | ITEM</div>
        </div>

        <hr />
        <div>REPEATED BLOCKS</div>
        <div class="content__container">
            <div class="content__head">HEAD (title)</div>
            <div class="content__body">LIST | ITEM</div>
            <div class="content__foot">link (collapsed)</div>
        </div>

        <div class="content__container">
            <div class="content__head">HEAD (title)</div>
            <div class="content__body">CAROUSEL</div>
            <div class="content__foot">link (collapsed)</div>
        </div>`
};

export default ContentMoviesComponent;