import { Component, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/models/movieDetails';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public movieDetails: MovieDetails;
    public addingAnnouncement: string;

    public constructor(private title: Title) { }

    ngOnInit() {
        this.title.setTitle("Movies | Home");
    }

    public transferMovieDetails($event) {
        this.movieDetails = $event;
        this.addingAnnouncement = "";
    }

    public initAnnouncement($event) {
        this.addingAnnouncement = $event;
    }
}
