import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
    })
    return this.http.get(enviroment.baseApi + '/UserProfile/Info', { headers: header });
  }

  UpdateProfile() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders()
      .set('Token', token ?? '')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put(enviroment.baseApi + '/UserProfile/update', { headers: header });
  }

  deleteProfile() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders()
      .set('Token', token ?? '')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.delete(enviroment.baseApi + '/UserProfile/delete', { headers: header });
  }

}
