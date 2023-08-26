import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { enviroment } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  paginate(limit: number, currentPageOrder: number) {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set('authentication', token ?? '');
    return this.http.get(enviroment.baseApi + `quiz/?perPage=${limit}&pageNumber=${currentPageOrder}`, { headers: header });
  }

  getAllQuizes() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get(enviroment.baseApi + '/Quizs/getAll', { headers: header });
  }
}
