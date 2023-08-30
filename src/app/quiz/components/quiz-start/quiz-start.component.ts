import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/services/home.service';
import { Specialization } from 'src/app/models/specialization';
import { SpecializationSelectionService } from 'src/app/specialization-selection/services/specialization-selection.service';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent {
  title!: string;
  id!: number;
  type!: string;
  class!: string;
  isFetching: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private specializationSelectionService: SpecializationSelectionService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.id = this.route.snapshot.params['id'];
    this.class = this.route.snapshot.params['class'];
    this.type = this.route.snapshot.params['type'];
    if (this.id == -1 || this.type == 'دورات' || this.type == 'أسئلة الكتاب') {
      console.log(this.id)
      this.title = this.type;
      this.isFetching = false;
    } else {
      this.specializationSelectionService.getAllSpecializationByid(this.id).subscribe(
        (result: any) => {
          this.title = result.data.Specialization.name;
          this.isFetching = false;
        },
        (_) => {
          alert('الرجاء التحقق من سلامة الاتصال لديك');
          this.isFetching = false;
        }
      );
    }
  }
  moveBack() {
    this.router.navigate(['specialization']);
  }
  moveToQuizById() {
    this.router.navigate(['Quiz', { id: this.id, type: this.type, class: this.class ?? 'أسئلة عامة' }]);
  }
}
