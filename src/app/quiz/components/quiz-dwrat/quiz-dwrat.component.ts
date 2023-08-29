import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dwrat } from 'src/app/models/dwrat';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-dwrat',
  templateUrl: './quiz-dwrat.component.html',
  styleUrls: ['./quiz-dwrat.component.css']
})
export class QuizDwratComponent {
  isFetching: boolean = false;
  dwrats: Dwrat[] = [];
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.id = this.route.snapshot.params['id'];
    if (this.id != 'undefined' && !isNaN(this.id) ) {
      this.quizService.getDwratsByClassificationId(this.id).subscribe(
        (result: any) => {
          this.dwrats = result.data.terms;
          console.log(result);
          this.isFetching = false;
        },
        (error) => {
          alert(error.message);
          this.isFetching = false;
        }
      );
    } else {
      this.quizService.getAllDwrats().subscribe(
        (result: any) => {
          this.dwrats = result.data.term;
          console.log(result);
          this.isFetching = false;
        },
        (error) => {
          alert(error.message);
          this.isFetching = false;
        }
      );
    }
  }
  moveToQuizById(uuid: number) {
    this.router.navigate( ['Quiz', {id: uuid, type: "دورات"}]);
  }
  moveToQuizStart(uuid: number) {
    this.router.navigate(['QuizStart', { id: uuid, type:"دورات" }]);
  }
}
