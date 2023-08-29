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
    return this.http.get(enviroment.baseApi + 'question/all');
  }
  getQuizesBook() {
    return this.http.get(enviroment.baseApi + 'question/all');
  }
  getQuizesById(uuid: string) {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get(enviroment.baseApi + `question/${uuid}`, { headers: header });
  }
  getQuizesByDwratId(id: string) {
    return this.http.get(enviroment.baseApi + `questions-of-term/${id}`);
  }
  getAllDwrats() {
    return this.http.get(enviroment.baseApi + 'term/all');
  }
  getDwratsByClassificationId(id: number) {
    return this.http.get(enviroment.baseApi + `specialization/${id}`);
  }
}
