import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) { }

  // public booksSubject$ = new Subject<TrendingBooks[]>();

  public fetchTrendingBooks(): Observable<TrendingBooks[]> {
    return this.http.get<TrendingBooks[]>(
      'http://localhost:3000/trendingBooks'
    );
  }

  // public fetchTrendingBooks(): void {
  //   this.http
  //     .get<TrendingBooks[]>(
  //       'http://localhost:4200/assets/data/trending-books.json'
  //     )
  //     .subscribe((response) => {
  //       this.booksSubject$.next(response);
  //     });
  // }
}

export interface TrendingBooks {
  id: string;
  title: string;
  author: string;
  rating: string;
  cover: string;
  reviews: string[];
}
