import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://192.168.31.74:8000/api';
  // url: string = 'https://b655-185-107-56-104.ngrok-free.app/api'
  constructor(private http: HttpClient) { }
  register(model: any) {
    return this.http.post<{ status: boolean, message: string }>(
      this.url + '/register',
      model
    );
  }
  login(model: any) {
    return this.http.post<{ status: boolean, token: string, message: string }>(
      this.url + '/login',
      model
    );
  }
}
