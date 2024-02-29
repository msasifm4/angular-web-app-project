import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../modules/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieStore {
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  movies$ = this.moviesSubject.asObservable();

  constructor() { }

  setMovies(movies: Movie[]): void {
    this.moviesSubject.next(movies);
  }

  getMovieByTitle(title: string): Movie | undefined {
    return this.moviesSubject.value.find(movie => movie.title === title);
  }

  printMovies(): void {
    console.log('Movies in store:', this.moviesSubject.value);
  }
}


