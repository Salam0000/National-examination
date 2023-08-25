import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-dwrat',
  templateUrl: './quiz-dwrat.component.html',
  styleUrls: ['./quiz-dwrat.component.css']
})
export class QuizDwratComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  moveToQuizById(uuid: number) {
    console.log('quiz')
    this.router.navigate([`/Quiz/${uuid}`]);
  }
}
