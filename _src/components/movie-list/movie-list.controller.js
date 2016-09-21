class MovieListController {
    constructor(MovieListService) {
        this._MovieListService = MovieListService;
    }
    
    $onInit() {
        this._movies = [];
        
        this._MovieListService.getMovieList().then((response) => {
            //console.log(response.movies);
            return this._movies = response.movies;
        });
    }
}

MovieListController.$inject = ['MovieListService'];

export default MovieListController;