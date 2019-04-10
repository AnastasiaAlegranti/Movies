import { Component, Input} from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetails } from 'src/app/models/movieDetails';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

    @Input()
    public movieDetails: MovieDetails;

    @Input()
    public addingAnnouncement: string;

    constructor(private movieService: MovieService) {
    }

    public editToList(): void {
        this.addingAnnouncement = null;
        let listRegArr = this.movieService.listOfSavedMovies;
        let res = 0;
        for (let i = 0; i < listRegArr.length; i++) {
            if (listRegArr[i].Title == this.movieDetails.Title) {
                res = 1;
                this.addingAnnouncement = "This movie is already excist in the list..."
            }
        }
        if (res == 0) {
            this.movieService.listOfSavedMovies.push(this.movieDetails);
            this.addingAnnouncement = "The movie have been saved in the list."
        }
        res = 0;
        this.movieDetails = null;
    }
}
