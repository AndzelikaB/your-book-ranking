import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  listOfTrendingBooks(): Observable<TrendingBooks[]> {
    return this.http.get<TrendingBooks[]>(
      'http://localhost:4200/assets/data/trending-books.json'
    );
  }
}

export interface TrendingBooks {
  id: string;
  title: string;
  author: string;
  rating: string;
  cover: string;
  reviews: string[];
}
