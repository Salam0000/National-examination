import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from 'src/app/profile/components/profile/profile.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private route: Router, private dialog: MatDialog) { }
  goToHome() {
    this.route.navigate(['/home'])
  }
  goToProfile() {
    if ('token' in localStorage) {
      this.dialog.open(ProfileComponent, {
        width: '70%',
        height: '93vh'
      });
    } else {
      alert('يرجى تسجيل الدخول');
    }
  }
  goToFavourite() {
    if ('token' in localStorage) {
      this.route.navigate(['/favourite']);
    } else {
      alert('يرجى تسجيل الدخول');
    }
  }
}
