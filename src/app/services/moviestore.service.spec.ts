import { TestBed } from '@angular/core/testing';

import { MoviestoreService } from './moviestore.service';

describe('MoviestoreService', () => {
  let service: MoviestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
