import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Directive()

export class Destroy implements OnDestroy {
  public readonly destroy$ = new Subject();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
