import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  userHeaderDetailsForm: FormGroup
  selectedValue: any;
  users: SelectItem[];
  selectedUser: SelectItem;


  constructor(private serviceShared: SharedService) {
    this.users = [
      { label: "Admin", value: "1" },
      { label: "User", value: "2" },

    ];
  }

  ngOnInit(): void {
    this.userHeaderDetailsForm = new FormGroup({
      userSelect: new FormControl(this.users[2], [])
    });

  }
  changeUser(event) {
    this.selectedValue = event.value
    this.serviceShared.userValue.next(this.selectedValue);


  }


}

