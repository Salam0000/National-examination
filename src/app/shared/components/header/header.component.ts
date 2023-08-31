import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProfileComponent } from 'src/app/profile/components/profile/profile.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  token: string = '';

  constructor(private route: Router, private authService: AuthService, private dialog: MatDialog) { }

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
  moveToFavourite() {
    this.route.navigate(['/favourite']);
  }
  moveToٍpecialization() {
    this.route.navigate(['/specialization']);
  }
  GoToProfile() {
    this.dialog.open(ProfileComponent, {
      width: '70%',
      height: '93vh'
    });
  }
  showPopUp() {
    this.dialog.open(AboutUsComponent, {
      width: '50%',
      height: '80vh',
    })
  }
  logout() {
    alert('تم تسجيل الخروج بنجاح');
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
    // this.authService.logout().subscribe(
    //   (result: any) => {
    //     if (result.statuscode == 200) {
    //       alert('تم تسجيل الخروج بنجاح');
    //       localStorage.removeItem('token');
    //       this.route.navigate(['/login']);
    //     } else {
    //       alert(result.message);
    //     }
    //   },
    //   (_) => {
    //     alert('الرجاء التحقق من سلامة الاتصال لديك');
    //   }
    // );
  }
}
