import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  token: string = '';

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') == null ? '' : localStorage.getItem('token')!;
    console.log(this.token);
  }
  moveToLogin() {
    this.route.navigate(['/login']);
  }
  moveToHome() {
    this.route.navigate(['/home']);
  }
  moveToٍpecialization() {
    this.route.navigate(['/specialization']);
  }
  GoToProfile() {
    this.route.navigate(['/profile']);
  }
  logout() {
    this.authService.logout().subscribe(
      (result: any) => {
        if (result.code == 200) {
          alert('تم تسجيل الخروج بنجاح');
          localStorage.removeItem('token');
          this.route.navigate(['/login']);
        }
        console.log(result);
      },
      (error) => { console.log(error); }
    )
  }
}
