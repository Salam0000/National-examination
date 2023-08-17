import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  register(model: any) {
    return this.http.post
      (
        enviroment.baseApi + '/register',
        model
      );
  }
  getAllSpecializations() {
    // let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Accept', '*/*');
    return this.http.get(enviroment.baseApi + '/Specialization/all');
  }
  login(model: any) {
    return this.http.post
      (
        enviroment.baseApi + '/login',
        model
      );
  }
}
