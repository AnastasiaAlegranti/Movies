import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Title } from '@angular/platform-browser';
import { MovieDetails } from 'src/app/models/movieDetails';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public moviesList: MovieDetails[];
    public itemToRemooveID: string;

    constructor(private movieService: MovieService,private title:Title) { }

    public ngOnInit() {
        this.moviesList = new Array<MovieDetails>();
        this.moviesList = this.movieService.listOfSavedMovies;
        this.title.setTitle("Movies | My List");
    }

    public removeFromTheList(id: string) {
        for (let i = 0; i < this.moviesList.length; i++) {
            if (this.moviesList[i].imdbID == id) {
                let movieToRemoove = this.moviesList[i];
                this.moviesList = this.moviesList.filter(m => m != movieToRemoove);
                this.movieService.listOfSavedMovies = this.moviesList;
            }
        }
    }

    public setRemooveItemID(id: string) {
        this.itemToRemooveID = id;
    }
}
