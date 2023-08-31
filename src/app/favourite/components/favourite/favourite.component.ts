import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { FavouriteService } from '../../serveics/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  quizes: Quiz[] = [];
  isFetching: boolean = false;

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit(): void {
    this.favouriteService.getQuizesFromFavorite().subscribe(
      (result: any) => {
        console.log(result);
        if (result.statuscode == 200) {
          this.quizes = result.data.questions;
        } else if (result.statuscode == 422) {
          alert('الرجاء التحقق من صحة المعلومات');
          let errorMessage = "";
          for (const key in result.errors) {
            if (result.errors.hasOwnProperty(key)) {
              errorMessage += `${key}: ${result.errors[key].join(" ")}\n`;
            }
          }
          alert(errorMessage);
        } else if (result.statuscode == 401 || result.statuscode == 409 || result.statuscode == 400 || result.statuscode == 500) {
          alert(result.message);
        } else {
          alert("عذرا, حدث خطأ غير معروف");
        }
        this.isFetching = false;
      },
      (_) => {
        alert('الرجاء التحقق من سلامة الاتصال لديك');
        this.isFetching = false;
      }
    );
  }
}
