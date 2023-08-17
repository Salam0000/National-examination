import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  personalInfoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group({
      username: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^09[0-9]{8}$')]]
    });


  }

  saveChanges() {
    if (this.personalInfoForm.valid) {

      console.log(this.personalInfoForm.value);
    }
  }

}
