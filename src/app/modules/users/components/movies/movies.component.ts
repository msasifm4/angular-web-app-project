import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../movie';
import { MovieStore } from '../../../../services/moviestore.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private movieStore: MovieStore) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieTitle = params['title'];
      this.movie = this.movieStore.getMovieByTitle(movieTitle);
      console.log('Movie:', this.movie);
      this.movieStore.printMovies()
    });
  }
}
