class PostListController {
    constructor(PostListService) {
        this._PostListService = PostListService;
    }
    
    $onInit() {
        this._posts = [];
        
        this._PostListService.getPostList().then((response) => {
            //console.log(response.posts);
            return this._posts = response.posts;
        });
    }
}

PostListController.$inject = ['PostListService'];

export default PostListController;