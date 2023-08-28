import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Collage } from 'src/app/models/collage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // appearance: MatFormFieldAppearance = 'fill';
  formLogin!: FormGroup;
  isOnline: boolean = true;

  constructor(private formBulider: FormBuilder, private router: Router, private authService: AuthService, private http: HttpClient) { }

  // checkInternetConnection() {
  //   // this.isOnline = navigator.onLine;
  //   this.http.get('https://www.google.co.uk/').subscribe(
  //     () => {
  //       this.isOnline = true;
  //       console.log(this.isOnline);
  //     },
  //     () => {
  //       this.isOnline = false;
  //       console.log(this.isOnline);

  //     }
  //   );
  //   console.log('online' + this.isOnline);
  // }
  ngOnInit(): void {
    // this.checkInternetConnection();
    this.formLogin = this.formBulider.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.formLogin.valid) {
      let model = new FormData();
      model.append('name', this.formLogin.value.username);
      model.append('code', this.formLogin.value.password);
      this.authService.login(model).subscribe((result: any) => {
        if (result.statuscode == 200) {
          localStorage.setItem('token', result.data.token);
          localStorage.setItem('college', JSON.stringify(result.data.college));
          localStorage.setItem('user', JSON.stringify(result.data.user));
          localStorage.setItem('specialization_id', result.data.college.id);
          this.router.navigate(['/home']);
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
      }
        , (_) => {
          alert('الرجاء التحقق من سلامة الاتصال لديك');
        });
    } else {
      alert('الرجاء أدخل جميع الحقول');
    }
  }
}
