import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable(
  { providedIn: 'root' }
)
export class SharedService {
  public detailsSource: any;
  public addUserDetails: any;
  public userValue = new BehaviorSubject<any>("2");



  constructor() { }

  updateUserValue(newValue: any) {
    this.userValue.next(newValue)
  }
}
