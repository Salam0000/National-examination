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
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Token', token ?? '');
    return this.http.get(enviroment.baseApi + '/Specialization/all', { headers: header });
  }

  getAllCollages() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Token', token ?? '');
    return this.http.get(enviroment.baseApi + '/Colleges/all', { headers: header });
  }
}
