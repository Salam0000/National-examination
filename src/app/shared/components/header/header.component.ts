import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  token: string = '';

  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') == null ? '' : localStorage.getItem('token')!;
    console.log(this.token);

  }
}
