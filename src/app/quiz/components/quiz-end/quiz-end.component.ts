import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-end',
  templateUrl: './quiz-end.component.html',
  styleUrls: ['./quiz-end.component.css']
})
export class QuizEndComponent {
  isFetching: boolean = false;
  finalGrade!: number;
  correctQuestions: number = 0;
  falseQuestions: number = 0;
  quizesInLocalHost!: any;

  constructor( private router: Router, private quizService: QuizService) { }


  ngOnInit(): void {
    if ('quizes' in localStorage) {
      this.quizesInLocalHost = JSON.parse(localStorage.getItem('quizes')!);
      this.quizesInLocalHost.forEach((element: any) => {
        let correctOption = element.quiz.answers.find((element: any) => {
          return element.is_true == true
        });
        if (element.option.uuid == correctOption.uuid) {
          this.correctQuestions++;
        } else {
          this.falseQuestions++;
        }
      });
    }
  }
  moveToQuizCorrection() {
    this.router.navigate(['/QuizCorrection']);
  }
}
