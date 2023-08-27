import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Specialization } from 'src/app/models/specialization';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;
  specializations: Specialization[] = [];
  isFetching: boolean = false;

  constructor(private formBulider: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.authService.getAllSpecializations().subscribe(
      (result: any) => {
        console.log(result);
        if (result.code == 200) {
          this.specializations = result.data;
        }
        this.isFetching = false;
      },
      (error) => {
        alert(error.message);
        this.isFetching = false;
      }
    );

    this.formRegister = this.formBulider.group({
      username: ["", Validators.required],
      phonenumber: ["", [Validators.required, Validators.pattern('^09[0-9]{8}$')]],
      specialization: ["", Validators.required]
    })
  }
  onSubmit() {
    if (this.formRegister.valid) {
      console.log(this.formRegister.value)
      const data = this.formRegister.value;
      let model = new FormData();
      model.append('name', this.formRegister.value.username)
      model.append('mobile_phone', this.formRegister.value.phonenumber)
      model.append('specialization_id', this.formRegister.value.specialization)
      console.log(model)
      this.authService.register(model).subscribe(
        (result: any) => {
          console.log(result.code)
          if (result.code == 200) {
            this.router.navigate(['/login']);
            alert("تم إنشاء الحساب بنجاح");
          } 
        },
        (result) => {
          if (result.code == 422) {
            let errorMessage = "";
            for (const key in result.errors) {
              if (result.errors.hasOwnProperty(key)) {
                errorMessage += `${key}: ${result.errors[key].join(" ")}\n`;
              }
            }
            alert(errorMessage);
          } else if (result.code == 401 || result.code == 400 || result.code == 500) {
            alert(result.message);
          } else {
            alert("عذرا, حدث خطأ غير معروف");
          }
          console.log(result);
        }
      );
    } else {
      alert('الرجاء أدخل جميع الحقول');
    }
  }


}
