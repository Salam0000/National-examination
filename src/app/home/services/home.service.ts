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
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get(enviroment.baseApi + '/Sliders/getAll', { headers: header });
  }

  getAllSpecializations() {
    return this.http.get(enviroment.baseApi + '/Specialization/allSpecialization');
  }

  getAllCollages() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get(enviroment.baseApi + '/Colleges/all', { headers: header });
  }

  getAllSpecializationsBytype(type: string) {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('authentication', token ?? '');
    return this.http.get(enviroment.baseApi + `/Specialization/filters/type=${type}`, { headers: header });
  }

  getAllSpecializationsByid(id: number) {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('authentication', token ?? '');
    return this.http.get(enviroment.baseApi + `/Specialization/filters/collage=${id}`, { headers: header });
  }

  checkButtons() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('authentication', token ?? '');
    return this.http.get(enviroment.baseApi + `/Specialization/checkButtons`, { headers: header });
  }

}
