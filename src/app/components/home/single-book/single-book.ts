import { Component } from '@angular/core';
import { TrendingBooksComponent } from '../trending-books/trending-books.component';
import { BooksService, TrendingBooks } from 'src/app/services/books.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Destroy } from 'src/app/core/shared/destroy.component';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'single-boook',
  templateUrl: 'single-book.html',
  styleUrls: ['single-book.scss'],
})
export class SingleBook extends Destroy {
  //to do type
  public currentBook: any;

  constructor(
    private booksService: BooksService,
    public route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.getCurrentBook();
  }

  public getCurrentBook(): void {
    const title = this.route.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title!.replace(/-/g, '%20',));

    this.booksService
      .fetchTrendingBooks()
      .pipe(
        map((trendingBooks) =>
          trendingBooks.find((item) => item.title === decodedTitle)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((book) => {
        this.currentBook = book;
        let reviews = JSON.stringify(this.currentBook.reviews);
        console.log(this.currentBook.reviews[0].description);
        console.log(this.currentBook.reviews);

      });
  }
}
