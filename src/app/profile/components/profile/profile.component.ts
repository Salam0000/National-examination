import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  personalInfoForm!: FormGroup;
  isFetching = false;

  constructor(private formBuilder: FormBuilder, private profileSevice: ProfileService) { }

  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group({
      username: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^09[0-9]{8}$')]]
    });
    this.isFetching = true;
    this.profileSevice.getProfile().subscribe((result: any) => {
      console.log(result);
      if (result.code == 200) {
        this.personalInfoForm.setValue({
          formControlName1: result.data.name,
          formControlName2: result.data.mobile_phone,
        });
      }
    },
      (error) => {
        alert(error.message);
      });
    this.isFetching = false;

  }

  saveChanges() {
    if (this.personalInfoForm.valid) {

      console.log(this.personalInfoForm.value);
    }
  }

}
