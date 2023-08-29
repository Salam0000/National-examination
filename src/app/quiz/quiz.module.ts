import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import { QuizEndComponent } from './components/quiz-end/quiz-end.component';
import { QuizDwratComponent } from './components/quiz-dwrat/quiz-dwrat.component';
import { SharedModule } from '../shared/shared.module';
import { QuizCorrectionComponent } from './components/quiz-correction/quiz-correction.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    QuizComponent,
    QuizStartComponent,
    QuizEndComponent,
    QuizDwratComponent,
    QuizCorrectionComponent,
    ReferenceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
  ]
  , 
  exports: [
    QuizComponent,
    QuizStartComponent,
    QuizEndComponent,
    QuizDwratComponent
  ]
})
export class QuizModule { }
