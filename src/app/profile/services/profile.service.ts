import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  token?: string;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token') ?? undefined;
  }

  getProfile() {
    return this.http.get(`${enviroment.baseApi}profile/${JSON.parse(localStorage.getItem('user')!).uuid}`);
  }

  UpdateProfile(model: any) {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${this.token}`
    // })
    return this.http.post(enviroment.baseApi + 'profile/update', model, { headers: header });
  }

  UpdatePhoto(model: any) {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return this.http.post(enviroment.baseApi + 'profile/update-photo', model, { headers: header });
  }

}
