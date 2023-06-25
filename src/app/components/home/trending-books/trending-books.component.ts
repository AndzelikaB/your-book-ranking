import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.scss'],
})
export class TrendingBooksComponent implements OnInit {
  dane: any[] | undefined;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksService.listOfTrendingBooks().subscribe((books) => {
      this.dane = books;
    });

    // this.booksService.listOfTrendingBooks().pipe(
    //   tap((books) => {
    //     console.log(books);

    //     this.dane = books;
    //   })
    // );
  }
}
