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

  constructor(private router: Router, private quizService: QuizService) { }


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
      let list: any[] = [];
      this.quizesInLocalHost.forEach((element: any) => {
        list.push({
          "question_uuid": element.option.uuid,
          "answer_uuid": element.quiz.uuid,
        })
      });
      let model = { 'answers': list };
      console.log(model)
      this.quizService.getMark(model).subscribe(
        (result: any) => {
          if (result.statuscode == 200) {
            this.finalGrade = result.data.marks;
            this.isFetching = false;
          } else {
            alert(result.message);
            this.isFetching = false;
          }
        },
        (_) => {
          alert('الرجاء التحقق من سلامة الاتصال لديك');
          this.isFetching = false;
        }
      );
    }
  }
  moveToQuizCorrection() {
    this.router.navigate(['/QuizCorrection']);
  }
}
