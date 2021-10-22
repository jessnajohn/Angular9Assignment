import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userEditDetails:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.userEditDetails=new FormGroup({
      name:new FormControl('',[Validators.required]),
      age:new FormControl('',[]),
      city:new FormControl('',[])
    
    });
      
  }
      onSubmit(){
       // this.submitted=true
    
      }
  

}
