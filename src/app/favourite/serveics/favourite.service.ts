import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  constructor(private http: HttpClient) { }

  addToFavorite(model: any) {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.post(enviroment.baseApi + 'favourite/create', model, { headers: header });
  }
  getQuizesFromFavorite() {
    let token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get(enviroment.baseApi + 'my_favourite', { headers: header });
  }
}
