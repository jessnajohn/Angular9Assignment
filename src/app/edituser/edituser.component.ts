import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
  inputs: ['userDetails']
})
export class EdituserComponent implements OnInit {
  previousValues: any;
  userEditDetailsForms: FormGroup;
  submitted = false
  successMessage: string = "";
  userDetailsList: Array<any> = [];

  constructor(private router: Router, private serviceShared: SharedService) { }



  ngOnInit(): void {
    this.userDetailsList = JSON.parse(localStorage.getItem("userdetails"))
    this.userEditDetailsForms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required,]),
      city: new FormControl('', [])
    });

    this.previousValues = this.serviceShared.detailsSource
    this.f.name.setValue(this.previousValues.name);
    this.f.age.setValue(this.previousValues.age);
    this.f.city.patchValue(this.previousValues.city);




  }
  onSubmit() {

    this.submitted = true
    if (this.userEditDetailsForms.invalid) {
      return;
    }
    let selectedUser = this.userEditDetailsForms.value;
    let allUsers: any[] = JSON.parse(localStorage.getItem("userdetails"));
    let remainingUsers = allUsers.filter(user => {
      return user.name !== selectedUser.name;
    });
    remainingUsers.push(selectedUser)
    this.userDetailsList = remainingUsers;
    localStorage.setItem("userdetails", JSON.stringify(remainingUsers))
    this.successMessage = 'Details updated successfully';
    setTimeout(() => {
      this.successMessage = "";
      this.router.navigate(['/home']);
    }, 1500)


  }
  get f() {
    return this.userEditDetailsForms.controls;
  }



}
