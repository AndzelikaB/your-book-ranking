import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.scss'],
})
export class TrendingSectionComponent {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient) {}

  listBook() {
    this.http
      .get<any>('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }
}
