import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url: string = 'https://6d90-5-0-32-200.ngrok-free.app/api';

  constructor(private http: HttpClient) { }

  getAllAdverts() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Token', token ?? '');
    return this.http.get(this.url + '', { headers: header });
  }

  getAllSpecializations() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Token', token ?? '');
    return this.http.post(this.url + '/Specialization/all', { headers: header });
  }

  getAllCollages() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Token', token ?? '');
    return this.http.get(this.url + '/Colleges/all', { headers: header });
  }
}
