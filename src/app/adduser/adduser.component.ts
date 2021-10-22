import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userAddDetails:FormGroup

  constructor() { }

  ngOnInit(): void {
this.userAddDetails=new FormGroup({
  name:new FormControl('',[Validators.required]),
  age:new FormControl('',[]),
  city:new FormControl('',[])

});
  }
  onSubmit(){
   // this.submitted=true

  }

}
