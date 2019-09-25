import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiKeyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiKeyProvider {

  public baseURL = 'https://api.themoviedb.org/3/';
  public apiKey = 'api_key=64967cbb93bd655df94b015919807ec0';

  constructor(public http: HttpClient) {
    console.log('Hello ApiKeyProvider Provider');
  }


  getMoviesup(){
    const url = this.baseURL + 'movie/upcoming?' + this.apiKey;
    return this.http.get(url);
  }

  getMoviestop(){ 
    const url = this.baseURL + 'movie/top_rated?' + this.apiKey;
    return this.http.get(url);
  }

  getMoviesnow(){
    const url = this.baseURL + 'movie/now_playing?' + this.apiKey;
    return this.http.get(url);
  }

  getMoviespop(){
    const url = this.baseURL + 'movie/popular?' + this.apiKey;
    return this.http.get(url);
  }

  searchMovie(query){
    const url = this.baseURL + 'search/movie?query=' + query +'&' + this.apiKey;
    return this.http.get(url);
  }

  getMovieDetails(movieID){
    const url = this.baseURL + 'movie/' + movieID + '?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getVideos(movieID){
    const url = this.baseURL + 'movie/' + movieID + '/videos?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }



}
