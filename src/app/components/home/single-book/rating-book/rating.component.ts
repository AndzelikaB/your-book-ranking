import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'rating-book',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.scss']
})

export class RatingComponent implements OnInit {
  public maxRating = 10;
  public maxRatingArr: any[] | undefined;

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }


}
