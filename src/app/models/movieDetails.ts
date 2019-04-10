export class MovieDetails{
    public constructor(
        public imdbID?: string,
        public Title?: string,
        public Year?: string,
        public Runtime?: string,
        public Genre?: string,
        public Director?: string,
        public imdbRating?: string,
        public Plot?: string,
        public Poster?: string,
        public Website?: string
    ) { };
}