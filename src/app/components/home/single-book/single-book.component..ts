import { Component, Optional } from '@angular/core';
import { TrendingBooksComponent } from '../trending-books/trending-books.component';
import { BooksService, TrendingBooks } from 'src/app/services/books.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Destroy } from 'src/app/core/shared/destroy.component';
import { takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReviewComponent } from './review-book/review-book.component';


@Component({
  selector: 'single-boook',
  templateUrl: 'single-book.component.html',
  styleUrls: ['single-book.component.scss'],
})
export class SingleBook extends Destroy {
  //to do type
  public currentBook: any;

  constructor(
    private booksService: BooksService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<ReviewComponent>

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

  public onAddReview() {
    console.log("onAddReview");
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ReviewComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
