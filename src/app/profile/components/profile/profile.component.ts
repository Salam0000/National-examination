import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

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
  currentUser!: User;

  constructor(private formBuilder: FormBuilder, private profileSevice: ProfileService, private dialog: MatDialog) { }

  ngOnInit() {
    this.isFetching = true;
    this.personalInfoForm = this.formBuilder.group({
      username: [{ value: '', disabled: true }, Validators.required],
      mobileNumber: [{ value: '', disabled: true }, [Validators.required, Validators.pattern('^09[0-9]{8}$')]]
    });
    this.profileSevice.getProfile().subscribe((result: any) => {
      if (result.statuscode == 200) {
        this.currentUser = result.data.profile;
        this.selectedImage = this.currentUser.photo;
        this.personalInfoForm.setValue({
          username: this.currentUser.name,
          mobileNumber: this.currentUser.phone,
        });
      }
      this.isFetching = false;
    },
      (_) => {
        alert('الرجاء التحقق من سلامة الاتصال لديك');
        this.isFetching = false;
      });
  }
  saveChanges() {
    if (this.personalInfoForm.valid) {
      this.isFetching = true;
      let model = new FormData();
      model.append('name', this.personalInfoForm.value.username);
      model.append('phone', this.personalInfoForm.value.mobileNumber);
      // the back wants it to be json not a formdata
      // let model = {
      //   'name': this.personalInfoForm.value.username,
      //   'mobile_phone': this.personalInfoForm.value.mobileNumber
      // }
      this.profileSevice.UpdateProfile(model).subscribe(
        (result: any) => {
          if (result.statuscode == 200) {
            alert('تم تعديل البروفايل بنجاح');
          } else {
            alert('عذرا حدث خطأ ما');
          }
          this.isFetching = false;
        },
        (_) => {
          alert('الرجاء التحقق من سلامة الاتصال لديك');
          this.isFetching = false;
        }
      );
    }
  }
  toggleEditing1(name: string) {
    this.isEditing1 = !this.isEditing1;
    if (!this.isEditing1) {
      this.personalInfoForm.get(name)?.disable()
    } else {
      this.personalInfoForm.get(name)?.enable()
    }
  }
  toggleEditing2(name: string) {
    this.isEditing2 = !this.isEditing2;
    if (!this.isEditing2) {
      this.personalInfoForm.get(name)?.disable()
    } else {
      this.personalInfoForm.get(name)?.enable()
    }
  }
  closePopup() {
    this.dialog.closeAll();
  }
  selectedImage: any
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        // this.selectedImage = e.target.result;
        this.isFetching = true;
        let model = new FormData();
        model.append('photo2', e.target.result);
        this.profileSevice.UpdatePhoto(model).subscribe((result: any) => {
          if (result.statuscode == 200) {
            alert('تمت إضافة الصورة بنجاح');
            this.isFetching = false;
          } else if (result.statuscode == 422) {
            alert('الرجاء التحقق من صحة المعلومات');
            let errorMessage = "";
            for (const key in result.errors) {
              if (result.errors.hasOwnProperty(key)) {
                errorMessage += `${key}: ${result.errors[key].join(" ")}\n`;
              }
            }
            alert(errorMessage);
          } else if (result.statuscode == 401 || result.statuscode == 409 || result.statuscode == 400 || result.statuscode == 500) {
            alert(result.message);
          } else {
            alert("عذرا, حدث خطأ غير معروف");
          }
        },
          (_) => {
            alert('الرجاء التحقق من سلامة الاتصال لديك');
            this.isFetching = false;
          });
      };
    }
  }
}
