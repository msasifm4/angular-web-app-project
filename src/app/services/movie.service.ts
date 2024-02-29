import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../modules/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://reactnative.dev/movies.json';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}
