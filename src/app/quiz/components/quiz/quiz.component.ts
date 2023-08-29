import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from '../../services/quiz.service';
import { Answer } from 'src/app/models/answer';
import { MatDialog } from '@angular/material/dialog';
import { ReferenceComponent } from '../reference/reference.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  quizes: Quiz[] = [];
  quizesInLocalHost: any[] = [];
  isFetching: boolean = false;
  isCorrect: boolean = false;
  isChecked: boolean = false;
  selectOption: any;
  id?: number;
  type?: string;
  currentPage = 1;
  lastPage!: number;
  itemsPerPage = 1;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.params['type'];
    console.log(this.id);
    if (this.type != 'undefined' && this.type == 'بنك الأسئلة') {
      console.log('1');
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
    } else if (this.type != 'undefined' && this.type == 'أسئلة الكتاب') {
      console.log('2');
      this.isFetching = false;
    } else if (this.type != 'undefined' && this.type == "دورات") {
      console.log('3');
      this.quizService.getQuizesByDwratId(this.id!.toString()).subscribe(
        (result: any) => {
          console.log(result);
          if (result.statuscode == 200) {
            this.quizes = result.data.questions;
            this.isFetching = false;
          } else {
            this.isFetching = false;
            alert('حدث خطأ في جلب البيانات')
          }
        },
        (error) => {
          alert(error.message);
          this.isFetching = false;
        }
      );
    } else {
      console.log('4');
      this.quizService.getQuizesById(this.id!.toString()).subscribe(
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
  clear() {
    this.selectOption = undefined;
    this.isChecked = false;
    this.isCorrect = false;
  }
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.quizes.slice(startIndex, endIndex);
  }
  nextPage() {
    if (this.selectOption != undefined) {
      this.clear();
      const totalPages = Math.ceil(this.quizes.length / this.itemsPerPage);
      if (this.currentPage < totalPages) {
        this.currentPage++;
      }
    } else {
      alert("يرجى تحديد إجابة");
    }
  }
  previousPage() {
    this.clear();
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  checkLH(uuid: number, option: any) {
    if ('quizes' in localStorage) {
      this.quizesInLocalHost = JSON.parse(localStorage.getItem('quizes')!);
      let quiz = this.quizesInLocalHost.find((element: any) => {
        return element.uuid == uuid
      });
      if (option.uuid == quiz?.option.uuid) {
        this.selectOption = option;
        return true;
      }
      else {
        return false;
      }
    }
    return false;
  }
  addQuizToLocalStorage(quizId: any, currentQuiz: Quiz, option: Answer) {
    this.selectOption = option;
    let quiz = {
      'uuid': quizId,
      'quiz': currentQuiz,
      'option': option,
    };
    if ('quizes' in localStorage) {
      this.quizesInLocalHost = JSON.parse(localStorage.getItem('quizes')!);
      let existIndex = this.quizesInLocalHost.findIndex((element) => {
        return element.uuid == quizId;
      });
      if (existIndex != -1) {
        this.quizesInLocalHost.splice(existIndex, 1);
      }
      this.quizesInLocalHost.push(quiz);
      localStorage.setItem('quizes', JSON.stringify(this.quizesInLocalHost));
    } else {
      this.quizesInLocalHost.push(quiz);
      localStorage.setItem('quizes', JSON.stringify(this.quizesInLocalHost));
    }
  }
  correctAnswer(quiz?: any) {
    if (this.selectOption != undefined) {
      if (this.isChecked == false) {
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
        this.isChecked = true;
      } else {
        alert('عذرا, تم تصحيح السؤال مسبقا');
      }
    } else {
      alert("يرجى تحديد إجابة");
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
  showPopUp() {
    let quiz = this.paginateData();
    this.dialog.open(ReferenceComponent, {
      width: '50%',
      height: '50vh',
      data: { 'reference': quiz[0].reference }
    })
  }
}
