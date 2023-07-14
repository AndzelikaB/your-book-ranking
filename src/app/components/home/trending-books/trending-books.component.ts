import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Destroy } from 'src/app/core/shared-modules/destroy.component';
import { BooksService, TrendingBooks } from 'src/app/services/books.service';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.scss'],
})
export class TrendingBooksComponent extends Destroy implements OnInit {
  //To do JAKI TYP???
  public books: any;
  //To do JAKI TYP???
  booksSub: any;

  constructor(private booksService: BooksService) {
    super();
  }

  ngOnInit() {
    this.getBooks();
  }

  public encodeTitle(title: string) {
    return encodeURIComponent(title).replace(/%20/g, '-');
  }

  private getBooks(): void {
    this.booksSub = this.booksService
      .fetchTrendingBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((books: TrendingBooks[]) => {
        this.books = books;
      });

  }
}
