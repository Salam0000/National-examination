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
      this.authService.login(model).subscribe((result) => {
        console.log(result);
        if (result.status) {
          localStorage.setItem('token', result.token)
          this.router.navigate(['/home']);
        } else {
          alert(result.message + result.status);
        }
      });
    } else {
      alert('الرجاء أدخل جميع الحقول');
    }
  }

}
