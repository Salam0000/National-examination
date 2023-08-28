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
  // @Input() quiz!: Quiz;
  // currentPageOrder!: number;
  // totalpageOrder!: number;
  // limit!: number;
  quizes: Quiz[] = [];
  quizesInLocalHost: any[] = [];
  isFetching: boolean = false;
  isCorrect: boolean = false;
  isChecked: boolean = false;
  selectOption: any;
  id?: string;
  currentPage = 1;
  lastPage!: number;
  itemsPerPage = 1;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.id = this.route.snapshot.params['id'];
    if (this.id != 'undefined' && this.id == 'بنك الأسئلة') {
      this.quizService.getAllQuizes().subscribe(
        (result: any) => {
          console.log(result);
          if (result.statuscode == 200) {
            this.quizes = result.data.questions;
            this.lastPage = this.quizes.length;
            this.isFetching = false;
          }
        },
        (error) => {
          alert(error.message);
          this.isFetching = false;
        }
      );
    } else {
      this.quizService.getQuizesById(this.id!).subscribe(
        (result: any) => {
          console.log(result);
          if (result.statuscode == 200) {
            this.quizes = result.data.questions;
            this.isFetching = false;
          }
        },
        (error) => {
          alert(error.message);
          this.isFetching = false;
        }
      );
    }

  }
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.quizes.slice(startIndex, endIndex);
  }
  nextPage() {
    const totalPages = Math.ceil(this.quizes.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
  checkLH(uuid: number, option: any) {
    if ('quizes' in localStorage) {
      this.quizesInLocalHost = JSON.parse(localStorage.getItem('quizes')!);
      let quiz = this.quizesInLocalHost.find((element: any) => {
        return element.uuid == uuid
      });
      if (option.uuid == quiz?.option.uuid) {
        return true;
      }
      else {
        return false
      }
    }
    return false;
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  addQuizToLocalStorage(quizId: any, option: any) {
    console.log(this.isChecked)
    // if (this.isChecked == false) {
      this.selectOption = option;
      let quiz = {
        'uuid': quizId,
        'option': option,
      };
      if ('quizes' in localStorage) {
        this.quizesInLocalHost = JSON.parse(localStorage.getItem('quizes')!);
        let existIndex = this.quizesInLocalHost.findIndex((element) => {
          return element.uuid == quizId;
        });
        // console.log(existIndex)
        if (existIndex != -1) {
          this.quizesInLocalHost.splice(existIndex, 1);
        }
        this.quizesInLocalHost.push(quiz);
        localStorage.setItem('quizes', JSON.stringify(this.quizesInLocalHost));
      } else {
        this.quizesInLocalHost.push(quiz);
        localStorage.setItem('quizes', JSON.stringify(this.quizesInLocalHost));
      }
    // }else{
    //   document.getElementsByName('input').forEach((radio)=>{ radio.setAttribute("disabled", "true"); });
    // }
  }
  correctAnswer(quiz?: any) {
    this.isChecked = true;
    // console.log(this.selectOption);
    quiz?.answers.forEach((e: any) => document.getElementById(`option${e.uuid}`)?.setAttribute("style", "border-color:black;"));
    let existIndex = this.quizesInLocalHost.findIndex((element) => {
      return element.uuid == quiz.uuid;
    });
    let correctOption = quiz.answers.find((element: any) => {
      return element.is_true == true
    });
    document.getElementById(`option${correctOption.uuid}`)?.setAttribute("style", "border-color:#20C4F4;");
    if (existIndex != -1) {
      this.quizesInLocalHost.forEach(element => {
        if (element.option.uuid != correctOption.uuid && quiz.uuid == element.uuid) {
          document.getElementById(`option${element.option.uuid}`)?.setAttribute("style", "border-color:red;");
        }
      });
    }
  }
  checkAnswer(option?: any) {
    if (option.is_true == true) {
      return true;
    } else if (option.is_true == false && this.selectOption != 'undefined' && this.selectOption?.uuid == option?.uuid) {
      return false;
    }
    return null;
  }
  moveToQuizEnd() {
    this.router.navigate(['/QuizEnd']);
  }
}
