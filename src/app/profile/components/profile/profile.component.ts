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
          username: result.data.name,
          mobileNumber: result.data.mobile_phone,
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
      this.isFetching = true;
      let model = new FormData();
      model.append('name', this.personalInfoForm.value.username);
      model.append('mobile_phone', this.personalInfoForm.value.mobileNumber);
      this.profileSevice.UpdateProfile(model).subscribe(
        (result: any) => {
          console.log(result);
          if (result.code == 200) {
            alert('تم تعديل البروفايل بنجاح')
          } else {
            alert('عذرا حدث خطأ ما')
          }
          this.isFetching = false;
        },
        (error) => {
          alert(error.message);
          this.isFetching = false;
        }
      );
      console.log(this.personalInfoForm.value);
    }
  }

}
