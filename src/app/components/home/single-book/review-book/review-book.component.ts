import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'review-book',
  templateUrl: 'review-book.component.html',
  styleUrls: ['review-book.component.scss']
})
export class ReviewComponent {
  public title: any;

  constructor(public dialogRef: MatDialogRef<ReviewComponent>) { }


}
