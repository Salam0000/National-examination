import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';



@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule
  ]
  , exports: [
    QuizComponent
  ]
})
export class QuizModule { }
