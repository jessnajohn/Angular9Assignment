import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { EdituserComponent } from '../edituser/edituser.component';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  userDetailsList: Array<any> = [];
  userDetails: any = [];
  isNavigating = false
  UserCheckValue:any;
  isAdmin: boolean = false;
  subscription:any

  constructor(private router: Router, private serviceShared: SharedService) {

  }

  ngOnInit(): void {
    this.isNavigating = false
    this.userDetailsList = JSON.parse(localStorage.getItem("userdetails"))
   this.subscription =this.serviceShared.userValue.subscribe(selectedValue =>{
     if( selectedValue ==  "1"){
     this.isAdmin = true
    }
    else{
      this.isAdmin = false
    }
    }) 
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
}

  addUser() {
    this.router.navigate(['/adduser']);
  }

  editUser(details) {

    this.serviceShared.detailsSource = details;
    
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