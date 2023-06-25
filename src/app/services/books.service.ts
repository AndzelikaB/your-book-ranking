import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  //To Do
  listOfTrendingBooks(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://localhost:4200/assets/data/trending-books.json'
    );

    // this.http
    //   .get('http://localhost:4200/assets/data/trending-books.json')
    //   .subscribe((books) => {
    //     let trendingBooks;
    //     trendingBooks = books;
    //     console.log(trendingBooks);
    //     return trendingBooks;
    //   });
  }
}
