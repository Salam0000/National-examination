import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/services/home.service';
import { Specialization } from 'src/app/models/specialization';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent {
  title!: string;
  specializationsId!: any;
  isFetching: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private homeService: HomeService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.specializationsId = this.route.snapshot.params['id'];
    if (isNaN(this.specializationsId)) {
      console.log(this.specializationsId)
      this.title = this.specializationsId;
      this.specializationsId = 'undefined';
    } else {

    }
    this.isFetching = false;
  }

  moveToQuizById(uuid?: number) {
    console.log('quiz')
    this.router.navigate([`/Quiz/${uuid ?? this.title}`]);
  }
}
