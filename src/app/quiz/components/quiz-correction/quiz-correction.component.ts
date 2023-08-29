import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-correction',
  templateUrl: './quiz-correction.component.html',
  styleUrls: ['./quiz-correction.component.css']
})
export class QuizCorrectionComponent {
  quizesInLocalHost: any[] = [];
  currentPage = 1;
  lastPage!: number;
  itemsPerPage = 1;

  constructor(private router: Router) {
    if ('quizes' in localStorage) {
      this.quizesInLocalHost = JSON.parse(localStorage.getItem('quizes')!);
    }
  }
  ngOnInit(): void {
    this.lastPage = this.quizesInLocalHost.length;
  }
  colorTheAnswer(uuid: number) {
    let quiz = this.paginateData();
    let correctOption = quiz[0].quiz.answers.find((element: any) => {
      return element.is_true == true
    });
    document.getElementById(`option${correctOption.uuid}`)?.setAttribute("style", "border-color:#20C4F4;");
    // document.getElementById(`option${correctOption.uuid}`)?.setAttribute("style", "background-color:#20C4F4;");
    let currentOption = quiz[0].option;
    // document.getElementById(`option${currentOption.uuid}`)?.setAttribute("style", "background-color:red;");
    document.getElementById(`option${currentOption.uuid}`)?.setAttribute("style", "border-color:red;");
    if (uuid == correctOption.uuid || uuid == currentOption.uuid) {
      return true
    } else {
      return false;
    }
  }
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.quizesInLocalHost.slice(startIndex, endIndex);
  }
  nextPage() {
    const totalPages = Math.ceil(this.quizesInLocalHost.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  moveToEnd() {
    localStorage.removeItem('quizes');
    this.router.navigate(['/home']);
  }
}
