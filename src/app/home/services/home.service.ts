import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getAllAdverts() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Token', token ?? '');
    return this.http.get(enviroment.baseApi + '', { headers: header });
  }

  getAllSpecializations() {
    // let token = localStorage.getItem('token');
    // const header = new HttpHeaders().set('Token', token ?? '');
    // const header = new HttpHeaders().set('Access-Control-Allow-Origin', 'https://693a-5-155-189-52.ngrok-free.app/api/Specialization/all');
    const header = new HttpHeaders()
      .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Accept,authorization,Authorization, Content-Type')
      .set('Access-Control-Allow-Origin', '*')
      // .set('Accept', '*')
      // .set('Content-Type', 'application/json')
    // .set('Access-Control-Allow-Credentials', true);
    // .set('Token', token!)
    // .set('Host', enviroment.baseApi)
    // .set('Origin', 'http://localhost:4200');
    // const header = new HttpHeaders().set('Host', '');
    return this.http.get(enviroment.baseApi + '/Specialization/all', { headers: header });
  }

  getAllCollages() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Token', token ?? '');
    return this.http.get(enviroment.baseApi + '/Colleges/all', { headers: header });
  }
}
