import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @Input() quiz!: Quiz;
  currentPageOrder!: number;
  totalpageOrder!: number;
  limit!: number;
  isFetching: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService) { }

  paginate(operator: string) {
    this.isFetching = true;
    if (operator == '+') {
      this.currentPageOrder++;
    } else {
      this.currentPageOrder--;
    }
    this.quizService.paginate(this.limit, this.currentPageOrder).subscribe(
      (result: any) => {
        this.quiz = result.data;
        console.log(result.data);
        this.isFetching = false;
      },
      (error) => {
        alert(error.message);
        this.isFetching = false;
      }
    );
  }

  moveToQuizById(uuid: number) {
    // console.log('quiz')
    // this.router.navigate([`/Quiz/${uuid}`]);
  }
}
