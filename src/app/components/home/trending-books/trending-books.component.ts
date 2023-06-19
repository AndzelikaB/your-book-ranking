import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.scss'],
})
export class TrendingBooksComponent {
  trendingBooks: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listBook();
  }

  listBook() {
    this.http
      .get('http://localhost:4200/assets/data/trending-books.json')
      .subscribe((books) => {
        this.trendingBooks = books;
        return this.trendingBooks;
      });
  }
}
