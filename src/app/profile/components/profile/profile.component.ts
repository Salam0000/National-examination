import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  personalInfoForm!: FormGroup;
  isFetching = false;
  isEditing1: boolean = false;
  isEditing2: boolean = false;


  constructor(private formBuilder: FormBuilder, private profileSevice: ProfileService, private dialog: MatDialog) { }

  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group({
      username: [{ value: '', disabled: true }, Validators.required],
      mobileNumber: [{ value: '', disabled: true }, [Validators.required, Validators.pattern('^09[0-9]{8}$')]]
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
  toggleEditing1(name: string) {
    this.isEditing1 = !this.isEditing1;
    console.log(this.isEditing1)
    if (!this.isEditing1) {
      this.personalInfoForm.get(name)?.disable()
    } else {
      this.personalInfoForm.get(name)?.enable()
    }
  }
  toggleEditing2(name: string) {
    this.isEditing2 = !this.isEditing2;
    console.log(this.isEditing2)
    if (!this.isEditing2) {
      this.personalInfoForm.get(name)?.disable()
    } else {
      this.personalInfoForm.get(name)?.enable()
    }
  }
  closePopup() {
    this.dialog.closeAll();
  }

}
