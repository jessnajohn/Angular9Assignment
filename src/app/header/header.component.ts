import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userHeaderDetailsForm: FormGroup
  selectedValue:any;

  constructor( private serviceShared: SharedService) { }

  ngOnInit(): void {
    this.userHeaderDetailsForm = new FormGroup({
      userSelect: new FormControl('Admin', [])
    });
    
  }
  changeUser(event){
    debugger
  this.selectedValue=event.target.value
  this.serviceShared.userValue.next(this.selectedValue);

    
  }
  onSubmit(){}

}
