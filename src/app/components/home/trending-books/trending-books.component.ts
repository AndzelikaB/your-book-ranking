import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService, TrendingBooks } from 'src/app/services/books.service';

@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.scss'],
})
export class TrendingBooksComponent implements OnInit, OnDestroy {
  public books: any;

  //To do JAKI TYP???
  booksSub: any;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getBooks();
    // this.booksService.fetchTrendingBooks();
    // this.booksService.booksSubject$.subscribe((books) => (this.books = books));
  }

  ngOnDestroy(): void {
    this.booksSub.unsubscribe();
  }

  private getBooks(): void {
    this.booksSub = this.booksService
      .fetchTrendingBooks()
      .subscribe((booksObs: TrendingBooks[]) => {
        this.books = booksObs;
      });
  }
}
