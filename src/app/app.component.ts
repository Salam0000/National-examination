import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final_project';

  constructor(private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['/home']); // Redirect to the first page
    } else {
      this.router.navigate(['/login']); // Redirect to the login page
    }
  }

}
