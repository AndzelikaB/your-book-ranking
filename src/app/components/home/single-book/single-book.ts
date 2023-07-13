import { Component } from '@angular/core';
import { TrendingBooksComponent } from '../trending-books/trending-books.component';
import { BooksService, TrendingBooks } from 'src/app/services/books.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'single-boook',
  templateUrl: 'single-book.html',
  styleUrls: ['single-book.scss'],
})
export class SingleBook {
  //to do type
  public currentBook: any;

  constructor(
    private booksService: BooksService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrentBook();
  }

  public getCurrentBook(): void {
    const title = this.route.snapshot.paramMap.get('title');

    this.booksService
      .fetchTrendingBooks()
      .pipe(
        map((trendingBooks) =>
          trendingBooks.find((item) => item.title === title)
        )
      )
      .subscribe((booksObs) => {
        this.currentBook = booksObs;
      });
  }
}
