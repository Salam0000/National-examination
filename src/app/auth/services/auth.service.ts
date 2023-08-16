import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url: string = 'http://192.168.31.74:8000/api';
  url: string = 'https://6d90-5-0-32-200.ngrok-free.app/api'
  constructor(private http: HttpClient) { }
  register(model: any) {
    return this.http.post
      (
        this.url + '/register',
        model
      );
  }
  getAllSpecializations() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Token', token ?? '');
    return this.http.post(this.url + '/Specialization/all', { headers: header });
  }
  login(model: any) {
    return this.http.post
      // <
      // Response
      // HttpResponse<any>
      // >
      (
        this.url + '/login',
        model
      );
  }
}
