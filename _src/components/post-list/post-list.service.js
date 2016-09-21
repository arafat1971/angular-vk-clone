class PostListService {
    constructor($http) {
        this._$http = $http;
    }
    
    getPostList() {
        return this._$http.get('../_api/posts/post_list.json').then(response => response.data);
    }
}

PostListService.$inject = ['$http'];


export default PostListService;