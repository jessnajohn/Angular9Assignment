import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { EdituserComponent } from '../edituser/edituser.component';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetailsList: Array<any> = [];
  userDetails: any = [];
  public uname: string;
  isNavigating = false

  constructor(private router: Router, private serviceShared: SharedService) {

  }

  ngOnInit(): void {
    this.isNavigating = false
    this.userDetailsList = JSON.parse(localStorage.getItem("userdetails"))
  }

  addUser() {
    this.router.navigate(['/adduser']);
  }

  editUser(details) {

    this.serviceShared.detailsSource = details;
    this.uname = 'jessna john'
    this.isNavigating = true
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