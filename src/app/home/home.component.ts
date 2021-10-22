import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.details=[
      {Name:'Jessna',Age:21,City:'Trivandrum'},
      {Name:'Nikhil',Age:27,City:'Trivandrum'},
      {Name:'Akhil',Age:23,City:'Kollam'},
      {Name:'Alen',Age:26,City:'Kottyam'},
      ]
    }


  }