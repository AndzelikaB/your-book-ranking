import { Component, OnInit } from '@angular/core';
import { BooksService, TrendingBooks } from 'src/app/services/books.service';

@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.scss'],
})
export class TrendingBooksComponent implements OnInit {
  dane: TrendingBooks[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getBooks();
  }

  private getBooks(): void {
    this.booksService.listOfTrendingBooks().subscribe((books) => {
      this.dane = books;
    });
  }
}
