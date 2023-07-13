import { Component } from '@angular/core';
import { TrendingBooksComponent } from '../trending-books/trending-books.component';
import { BooksService, TrendingBooks } from 'src/app/services/books.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'single-boook',
  templateUrl: 'single-book.html',
  styleUrls: ['single-book.scss'],
})
export class SingleBook {
  public title: string | null = ''; //to do type
  public author: string = '';
  public rating: string = '';
  allbooks: any[] = [];

  constructor(
    private booksService: BooksService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
    console.log(this.title);

    this.getBooks();
    console.log(this.allbooks);
  }

  public searchBook(): void {
    const findedBook = this.allbooks.find((item) => item.title === this.title);
    this.author = findedBook.author;
    this.rating = findedBook.rating;
    console.log(findedBook, this.author);
  }

  private getBooks(): void {
    this.booksService
      .fetchTrendingBooks()
      .subscribe((booksObs: TrendingBooks[]) => {
        this.allbooks = booksObs;
        this.searchBook();
      });
  }
}
