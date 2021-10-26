import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { EdituserComponent } from '../edituser/edituser.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetailsList: Array<any> = [];
  HighlightRow: Number;
  enableEdit: any = 0;
  userDetails: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.userDetailsList = JSON.parse(localStorage.getItem("userdetails"))
  }

  addUser() {
    this.router.navigate(['/adduser']);
  }

  editUser(details) {
    this.userDetails = details
    this.router.navigate(['/edituser']);
  }

  deleteUser(details) {
    let selectedUser = details
    let allUsers: any[] = JSON.parse(localStorage.getItem("userdetails"));
    let remainingUsers = allUsers.filter(user => {
      return user.name !== selectedUser.name;
    });

    localStorage.setItem("userdetails", JSON.stringify(remainingUsers))
    this.userDetailsList = remainingUsers;


  }


}