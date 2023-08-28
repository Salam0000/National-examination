import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SpecializationSelectionService {

  constructor(private http: HttpClient) { }

  getAllAdverts() {
    // let token = localStorage.getItem('token');
    // const header = new HttpHeaders().set('authentication', token ?? '');
    return this.http.get(enviroment.baseApi + 'slider/all');
  }
  getAllClassifications() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('authentication', token ?? '');
    let id = localStorage.getItem('specialization_id');
    return this.http.get(enviroment.baseApi + `specializations-of-college/${id}`, { headers: header });
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
