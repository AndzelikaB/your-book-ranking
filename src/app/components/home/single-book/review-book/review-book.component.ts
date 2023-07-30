import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'review-book',
  templateUrl: 'review-book.component.html',
  styleUrls: ['review-book.component.scss']
})
export class ReviewComponent {
  @Output() descriptionEmit = new EventEmitter<any>();
  public currentDate: Date = new Date();
  public date = new FormControl('');
  public description = new FormControl('');

  constructor(public dialogRef: MatDialogRef<ReviewComponent>) { }

  public onAddReview(date: any, des: any) {
    this.descriptionEmit.emit(des.value);

    this.descriptionEmit = des.value
    console.log("add review: " + this.descriptionEmit + date.value)
  }
}
