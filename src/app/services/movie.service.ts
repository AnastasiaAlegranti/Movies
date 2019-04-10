import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { MovieTitle } from '../models/movieTitle';
import { MovieDetails } from '../models/movieDetails';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    public listOfSavedMovies = new Array<MovieDetails>();
    public announcment:string;
     
    public constructor(private httpClient: HttpClient) { }

    public getMoviesBySearch(searchByTitle: string): Observable<MovieTitle> {
        return this.httpClient.get<MovieTitle>("https://www.omdbapi.com/?s=" + searchByTitle + "&apikey=74d3838e");
    }

    public getMovieById(movieId: string): Observable<MovieDetails> {
        return this.httpClient.get<MovieDetails>("https://www.omdbapi.com/?i=" + movieId.trim() + "&apikey=74d3838e");     
    }
}
