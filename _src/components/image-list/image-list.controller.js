class ImageListController {
    constructor(ImageListService) {
        this._ImageListService = ImageListService;
    }
    
    $onInit() {
        this._images = [];
        
        this._ImageListService.getImageList().then((response) => {
            //console.log(response.images);
            return this._images = response.images;
        });
    }
}

ImageListController.$inject = ['ImageListService'];

export default ImageListController;