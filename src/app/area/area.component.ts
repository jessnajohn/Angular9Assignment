import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  calculateAreaForm: FormGroup
  isDisabled: boolean = true;
  submitted = false;

  constructor(private router: Router) { }


  ngOnInit() {
    this.calculateAreaForm = new FormGroup({
      length: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(2), Validators.pattern("^[1-9][0-9]*")]),
      width: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(2), Validators.pattern("^[1-9][0-9]*")]),
      area: new FormControl('Calculated Area')
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.calculateAreaForm.invalid) {
      return;
    }
    this.calculateArea()
  }

  public calculateArea() {
    this.f.area.patchValue(this.f.length.value * this.f.width.value);
  }

  resetForm() {
    this.calculateAreaForm.reset();
    this.submitted = false
  }

  textFieldTouched() {
    this.f.area.reset();
  }

  get f() {
    return this.calculateAreaForm.controls;
  }


  nextClick() {
    this.router.navigate(['/adduser']);
  }


}


