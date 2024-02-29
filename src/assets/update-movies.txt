import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../movie';
import { MovieStore } from '../../../../services/moviestore.service';
import { MovieService } from '../../../../services/movie.service';
import { Movie2 } from '../../../movie2';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie2 | undefined;
  movies: Movie2[] = [];
  
  
  constructor(private route: ActivatedRoute, private movieStore: MovieStore, private movieService: MovieService,) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data: any) => {
        console.log('Received movies:', data.movies); // Log the received movies
        this.movies = data.movies.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          releaseYear: parseInt(movie.releaseYear) // Convert releaseYear to a number
        }));
        this.movieStore.setMovies(this.movies);
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );


    this.route.params.subscribe(params => {
      const movieTitle = params['title'];
      this.movie = this.movieStore.getMovieByTitle(movieTitle);
      console.log('Movie:', this.movie);
      this.movieStore.printMovies()
    });
  }
}
