import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import { QuizEndComponent } from './components/quiz-end/quiz-end.component';
import { QuizDwratComponent } from './components/quiz-dwrat/quiz-dwrat.component';



@NgModule({
  declarations: [
    QuizComponent,
    QuizStartComponent,
    QuizEndComponent,
    QuizDwratComponent
  ],
  imports: [
    CommonModule
  ]
  , exports: [
    QuizComponent,
    QuizStartComponent,
    QuizEndComponent,
    QuizDwratComponent
  ]
})
export class QuizModule { }
