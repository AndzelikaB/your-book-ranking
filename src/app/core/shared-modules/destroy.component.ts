import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'destroy',
  template: '',
  styleUrls: []
})

export class Destroy implements OnDestroy {
  public destroy$ = new Subject();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
