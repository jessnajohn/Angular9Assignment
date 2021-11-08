import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userAddDetailsForm: FormGroup
  successMessage: string = "";
  submitted = false;

  constructor(private router: Router, private serviceShared: SharedService) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.userAddDetailsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.pattern("^[1-9][0-9]*")]),
      city: new FormControl('', [])

    });
  }
  onSubmit() {
    this.submitted = true
    if (this.userAddDetailsForm.invalid) {
      return;
    }
    let oldUsersDetails: any[] = this.serviceShared.addUserDetails ? this.serviceShared.addUserDetails : []
    let currentUser = this.userAddDetailsForm.value;
    oldUsersDetails.push(currentUser);
    this.serviceShared.addUserDetails = oldUsersDetails;
    this.successMessage = 'Details added successfully';
    setTimeout(() => {
      this.successMessage = "";
      this.router.navigate(['/home']);
    }, 1500)

  }
  get f() {
    return this.userAddDetailsForm.controls;
  }

}
