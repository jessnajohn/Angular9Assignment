import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  data: Observable<any>
 
  orderStatus :any;
  constructor() { }

  ngOnInit(): void {
    this.data=new Observable(observer => {
      setTimeout(() => {
        observer.next("Delay")
      }, 2000)

      setTimeout(() => {
        observer.next("Inprogress")
      }, 4000);

      setTimeout(() => {
        observer.next("Processing")
      }, 6000);

      setTimeout(() => {
        observer.complete()
      }, 6000);

      setTimeout(() => {
        observer.next("Completed")
      }, 8000);
    })
    this.data.subscribe(val=>{
      this.orderStatus=val;
    })
  }
    

}
