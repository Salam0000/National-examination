import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  token: string = '';

  constructor(private rout: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') == null ? '' : localStorage.getItem('token')!;
    console.log(this.token);
  }
  moveToLogin() {
    this.rout.navigate(['/login']);
  }
  moveToHome() {
    this.rout.navigate(['/home']);
  }
  GoToProfile() {
    this.rout.navigate(['/profile']);
  }
}
