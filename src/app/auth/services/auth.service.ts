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
    return this.http.post(enviroment.baseApi + 'register', model);
  }
  getAllSpecializations() {
    // let token = localStorage.getItem('token');
    // const header = new HttpHeaders().set('Accept', '*/*');
    // const header = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    //   .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    //   .set('Access-Control-Allow-Headers', 'Accept,authorization,Authorization, Content-Type');
    return this.http.get(enviroment.baseApi + 'college/all');
  }
  login(model: any) {
    return this.http.post(enviroment.baseApi + 'login', model);
  }
  logout() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.post(enviroment.baseApi + 'api/logout', { headers: header });
  }
}
