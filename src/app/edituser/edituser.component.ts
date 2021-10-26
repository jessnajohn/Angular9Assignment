import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  @Input() userDetails: any;
  userEditDetailsForms: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.userEditDetailsForms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required,]),
      city: new FormControl('', [])

    });

  }
  onSubmit() {
    // this.submitted=true

  }


}
