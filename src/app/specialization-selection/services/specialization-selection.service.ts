import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroment';
import { Specialization } from 'src/app/models/specialization';

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
  getAllClassificationsGraduate() {
    return this.http.get(enviroment.baseApi + `specializations-of-college/${JSON.parse(localStorage.getItem('college')!)!.uuid}`);
  }
  getAllClassificationsMaster() {
    return this.http.get(enviroment.baseApi + `master-spec/${JSON.parse(localStorage.getItem('college')!)!.uuid}`);
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

  getAllSpecializationByid(id: number) {
    return this.http.get(enviroment.baseApi + `specialization/${id}`);
  }

  checkButtons() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('authentication', token ?? '');
    return this.http.get(enviroment.baseApi + `/Specialization/checkButtons`, { headers: header });
  }
}
