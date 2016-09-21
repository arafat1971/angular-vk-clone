class MovieListService {
    constructor($http) {
        this._$http = $http;
    }
    
    getMovieList() {
        return this._$http.get('../_api/movies/movie_list.json').then(response => response.data);
    }
}

MovieListService.$inject = ['$http'];


export default MovieListService;