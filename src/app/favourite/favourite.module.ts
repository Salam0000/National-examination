import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { QuizModule } from '../quiz/quiz.module';



@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    QuizModule
  ]
})
export class FavouriteModule { }
