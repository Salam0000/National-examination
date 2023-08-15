import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from 'src/app/models/advert';
import { Specialization } from 'src/app/models/specialization';

@Injectable({
  providedIn: 'root'
})
export class SpecializationSelectionService {

  url: string = 'http://192.168.31.74:8000/api';

  constructor(private http: HttpClient) { }

  getAllAdverts(): Observable<Advert[]> {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('authentication', token ?? '');
    return this.http.get<Advert[]>(this.url + '', { headers: header });
  }

  getAllSpecializations(): Observable<Specialization[]> {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('authentication', token ?? '');
    return this.http.get<Specialization[]>(this.url + '', { headers: header });
  }
}
