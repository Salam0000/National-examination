import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

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

  checkInternetConnection() {
    // this.isOnline = navigator.onLine;
    this.http.get('https://www.google.co.uk/').subscribe(
      () => {
        this.isOnline = true;
        console.log(this.isOnline);
      },
      () => {
        this.isOnline = false;
        console.log(this.isOnline);

      }
    );
    console.log('online' + this.isOnline);
  }

  ngOnInit(): void {
    // this.checkInternetConnection();
    this.formLogin = this.formBulider.group({
      username: ["", Validators.required],
      password: ["", Validators.required],

    });
  }
  onSubmit() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value)
      let model = new FormData();
      model.append('name', this.formLogin.value.username);
      model.append('login_code', this.formLogin.value.password);
      this.authService.login(model).subscribe((result: any) => {
        // console.log(result.statusCode)
        if (result.code == 200) {
          localStorage.setItem('token', result.data.token)
          this.router.navigate(['/home']);

        } else if (result.code == 422) {
          let errorMessage = "";
          for (const key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              errorMessage += `${key}: ${result.errors[key].join(" ")}\n`;
            }
          }
          console.log(errorMessage)
          alert(errorMessage);
        } else if (result.code == 401) {
          alert(result.message);
        } else if (result.code == 400) {
          alert(result.message);
        }
      });
      // const status = result.headers.get('status');
      // console.log(status)
      // this.authService.login(model).subscribe((result) => {
      //   // const statusCode = result.headers.get('X-Status');
      //   // console.log('Status Code:', statusCode);
      //   // alert(statusCode)
      //   console.log(result.status);
      //   console.log(result);
      //   console.log(result.ok);
      //   console.log(result.headers);
      //   console.log(result.body);
      //   if (result.status == 200) {
      //     localStorage.setItem('token', result.body.data[0].token)
      //     this.router.navigate(['/home']);
      //   } else if (result.status == 422) {
      //     let errorMessage = "";
      //     for (const key in result.body.errors) {
      //       if (result.body.errors.hasOwnProperty(key)) {
      //         errorMessage += `${key}: ${result.body.errors[key].join(" ")}\n`;
      //       }
      //     }
      //     alert('الرجاء التحقق من صحة المعلومات');
      //   }
      // });
      // this.authService.login(model).subscribe((result) => {
      //   console.log(result);
      //   if (typeof result.status == "boolean" && result.status == true) {
      //     localStorage.setItem('token', result.token)
      //     this.router.navigate(['/home']);
      //   } else if (typeof result.status == "number" && result.status == 422) {
      //     let errorMessage = "";
      //     for (const key in result.errors) {
      //       if (result.errors.hasOwnProperty(key)) {
      //         errorMessage += `${key}: ${result.errors[key].join(" ")}\n`;
      //       }
      //     }
      //     alert('الرجاء التحقق من صحة المعلومات');
      //   }
      // });
    } else {
      alert('الرجاء أدخل جميع الحقول');
    }
  }

}
