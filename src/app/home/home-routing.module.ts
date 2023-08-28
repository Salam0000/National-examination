import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecializationSelectionComponent } from '../specialization-selection/components/specialization-selection/specialization-selection.component';
import { QuizComponent } from '../quiz/components/quiz/quiz.component';
import { QuizStartComponent } from '../quiz/components/quiz-start/quiz-start.component';
import { QuizEndComponent } from '../quiz/components/quiz-end/quiz-end.component';
import { QuizDwratComponent } from '../quiz/components/quiz-dwrat/quiz-dwrat.component';
import { QuizCorrectionComponent } from '../quiz/components/quiz-correction/quiz-correction.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'specialization', component: SpecializationSelectionComponent },
  { path: 'QuizStart', component: QuizStartComponent },
  { path: 'QuizStart/:id', component: QuizStartComponent },
  { path: 'QuizEnd', component: QuizEndComponent },
  { path: 'QuizDwrat', component: QuizDwratComponent },
  { path: 'specialization/:id', component: SpecializationSelectionComponent },
  { path: 'Quiz/:id', component: QuizComponent },
  { path: 'QuizCorrection', component: QuizCorrectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
