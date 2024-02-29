import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../../../services/movie.service';
import { Movie } from '../../../movie';
import { MovieStore } from '../../../../services/moviestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private router: Router,
    private movieService: MovieService,
    private movieStore: MovieStore
  ) { }

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
  }
  

  goToMovieDetail(movieName: string): void {
    this.router.navigate(['/users/movies', movieName]);
  }
}