class ImageListService {
    constructor($http) {
        this._$http = $http;
    }
    
    getImageList() {
        return this._$http.get('../_api/images/image_list.json').then(response => response.data);
    }
}

ImageListService.$inject = ['$http'];

export default ImageListService;