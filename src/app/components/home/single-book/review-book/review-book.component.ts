import { HttpClient } from "@angular/common/http";
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

  constructor(private http: HttpClient) { }

  // public dialogRef: MatDialogRef<ReviewComponent>

  public onAddReview(date: any, des: any) {
    // this.descriptionEmit.emit(des.value);

    // this.descriptionEmit = des.value
    console.log("add review: " + des.value + date.value);
    console.log('succesfully added')


    this.http.post<any>('http://localhost:3000/trendingBooks?id=1', { description: des.value, date: date.value }).subscribe(data => {
      console.log("info" + data)
    });
  }
}
