import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieTitle } from 'src/app/models/movieTitle';
import { MovieDetails } from 'src/app/models/movieDetails';

@Component({
    selector: 'app-movie-titles',
    templateUrl: './movie-titles.component.html',
    styleUrls: ['./movie-titles.component.css']
})
export class MovieTitlesComponent implements OnInit {
    public searchByTitle: string="";
    public moviesBySearch: MovieTitle;
    public regexAnnouncement: string;

    @Output()
    public movieDetails = new EventEmitter<MovieDetails>();

    @Output()
    public addingAnnouncement = new EventEmitter<string>();

    public constructor(private movieService: MovieService) { }

    public ngOnInit() {
        this.getMovieTitles();
    }

    public filterRegex(event: any) {//Filter search tool
        let regex = /[^A-Za-z ]/;
        let search = event.key.replace(regex, "");
        if (search === "") {
            this.regexAnnouncement = "Please enter letters only in english language.";
            return false;
        }
        if (search === "Enter") {
            this.regexAnnouncement = null;
            this.getMovieTitles();
            return true;
        }
        this.regexAnnouncement = null;
    }

    public getMovieTitles(): void {
        let observable = this.movieService.getMoviesBySearch(this.searchByTitle);
        observable.subscribe(m => this.moviesBySearch = m);
    }

    public getMovieDetails(imdbID: string): void {
        this.addingAnnouncement.emit(null);
        let observable = this.movieService.getMovieById(imdbID);
        observable.subscribe(m =>this.movieDetails.emit(m));
    }
}
