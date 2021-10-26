import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userAddDetailsForm: FormGroup
  successMessage: string = "";
  submitted = false

  constructor(private router: Router) { }

  ngOnInit(): void {
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
    let addedUsersDetails: any[] = JSON.parse(localStorage.getItem("userdetails")) || [];
    let currentUser = this.userAddDetailsForm.value;
    addedUsersDetails.push(currentUser);
    localStorage.setItem('userdetails', JSON.stringify(addedUsersDetails));
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
