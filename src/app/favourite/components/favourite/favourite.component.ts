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

  constructor(
    private router: Router,
    private favouriteService: FavouriteService) { }

  ngOnInit(): void {
    this.favouriteService.getQuizesFromFavorite().subscribe(
      (result: any) => {
        console.log(result);
        if (result.statuscode == 200) {
          this.quizes = result.data.questions;
          this.isFetching = false;
        } else {
          this.isFetching = false;
          alert('حدث خطأ في جلب البيانات')
        }
      },
      (error) => {
        alert(error.message);
        this.isFetching = false;
      }
    );
  }
}
