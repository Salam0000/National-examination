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
  specialization!: Specialization;
  specializationsId!: string;
  isFetching: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private homeService: HomeService) { }

  // ngOnInit(): void {
  //   this.isFetching = true;
  //   this.specializationsId = this.route.snapshot.params['id'];
  //   this.homeService.getAllSpecializations().subscribe(
  //     (result: any) => {
  //       console.log(result);
  //       if (result.code == 200) {
  //         // this.specializations = result.data;
  //         this.specialization = result.data.find((e: any) => e.id == this.specializationsId);
  //         this.isFetching = false;
  //       }
  //     },
  //     (error) => {
  //       alert(error.message);
  //       this.isFetching = false;
  //     }
  //   );
  // }

  moveToQuizById(uuid: number) {
    console.log('quiz')
    this.router.navigate([`/Quiz/${uuid}`]);
  }
}
