import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable(
  { providedIn: 'root' }
)
export class SharedService {
  public detailsSource: any;
  public userValue = new BehaviorSubject<any>("2");



  constructor() { }

  UpdateuserValue(newValue: any) {
    this.userValue.next(newValue)
  }
}
