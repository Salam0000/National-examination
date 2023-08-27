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
  quizes: Quiz[] = [];
  quizesInLocalHost: any[] = [];
  // currentPageOrder!: number;
  // totalpageOrder!: number;
  // limit!: number;
  isFetching: boolean = false;
  isCorrect: boolean = false;
  selectOption: any;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService) { }

  // ngOnInit(): void {
  //   this.isFetching = true;
  //   this.quizService.getAllQuizes().subscribe(
  //     (result: any) => {
  //       console.log(result);
  //       if (result.code == 200) {
  //         this.quizes = result.data;
  //         this.isFetching = false;
  //       }
  //     },
  //     (error) => {
  //       alert(error.message);
  //       this.isFetching = false;
  //     }
  //   );
  // }

  currentPage = 1;
  itemsPerPage = 1;
  data = [
    {
      id: 1,
      questionText: 'الخدمة بأفضل جهد في بروتوكول الانترنيت IPV4 :تعني ان',
      options: [
        {
          id: 1,
          text: 'بروتوكول الانترنيت لايقدم اليات تحكم بالتدفق او التحكم بالاخطاء',
          correct: true,
        },
        {
          id: 2,
          text: 'بروتوكول الانترنيت يقدم تحكم بالتدفق والتحكم بالاخطاء',
          correct: false,
        },
        {
          id: 3,
          text: 'بروتوكول الانترنيت صالح لتطبيقات الوسائط المتعددة ',
          correct: false,
        },
        {
          id: 4,
          text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
          correct: false,
        },
        {
          id: 5,
          text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
          correct: false,
        },
      ],
      explanation:
        'TS uses a colon (:) to separate the property name from the property type',
    },
    {
      id: 2,
      questionText: 'الخدمة بأفضل جهد في  بروتوكول الانترنيت IPV4 : ',
      options: [
        {
          id: 1,
          text: 'بروتوكول الانترنيت لايقدم اليات تحكم بالتدفق او التحكم بالاخطاء',
          correct: true,
        },
        {
          id: 2,
          text: 'بروتوكول الانترنيت يقدم تحكم بالتدفق والتحكم بالاخطاء',
          correct: false,
        },
        {
          id: 3,
          text: 'بروتوكول الانترنيت صالح لتطبيقات الوسائط المتعددة ',
          correct: false,
        },
        {
          id: 4,
          text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
          correct: false,
        },
        {
          id: 5,
          text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
          correct: false,
        },
      ],
      explanation:
        'TS uses a colon (:) to separate the property name from the property type',
    },
    {
      id: 3,
      questionText: 'الخدمة بأفضل جهد في بروتوكول الانترنيت IPV4 :تعني ان',
      options: [
        {
          id: 1,
          text: 'بروتوكول الانترنيت لايقدم اليات تحكم بالتدفق او التحكم بالاخطاء',
          correct: true,
        },
        {
          id: 2,
          text: 'بروتوكول الانترنيت يقدم تحكم بالتدفق والتحكم بالاخطاء',
          correct: false,
        },
        {
          id: 3,
          text: 'بروتوكول الانترنيت صالح لتطبيقات الوسائط المتعددة ',
          correct: false,
        },
        {
          id: 4,
          text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
          correct: false,
        },
        {
          id: 5,
          text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
          correct: false,
        },
      ],
      explanation:
        'TS uses a colon (:) to separate the property name from the property type',
    },
    {
      id: 4,
      questionText: 'الخدمة بأفضل جهد في بروتوكول الانترنيت IPV4 :تعني ان',
      options: [
        {
          id: 1,
          text: 'بروتوكول الانترنيت لايقدم اليات تحكم بالتدفق او التحكم بالاخطاء',
          correct: true,
        },
        {
          id: 2,
          text: 'بروتوكول الانترنيت يقدم تحكم بالتدفق والتحكم بالاخطاء',
          correct: false,
        },
        {
          id: 3,
          text: 'بروتوكول الانترنيت صالح لتطبيقات الوسائط المتعددة ',
          correct: false,
        },
        {
          id: 4,
          text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
          correct: false,
        },
        {
          id: 5,
          text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
          correct: false,
        },
      ],
      explanation:
        'TS uses a colon (:) to separate the property name from the property type',
    },
  ];
  // data = JSON.parse(
  //   JSON.stringify({
  //     questions: [
  //       {
  //         questionText: 'الخدمة بأفضل جهد في بروتوكول الانترنيت IPV4 :تعني ان',
  //         options: [
  //           {
  //             text: 'بروتوكول الانترنيت لايقدم اليات تحكم بالتدفق او التحكم بالاخطاء',
  //             correct: true,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يقدم تحكم بالتدفق والتحكم بالاخطاء',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت صالح لتطبيقات الوسائط المتعددة ',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
  //             correct: false,
  //           },

  //           {
  //             text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
  //             correct: false,
  //           },
  //         ],
  //         explanation:
  //           'TS uses a colon (:) to separate the property name from the property type',
  //       },
  //       {
  //         questionText: 'الخدمة بأفضل جهد في  بروتوكول الانترنيت IPV4 : ',
  //         options: [
  //           {
  //             text: 'بروتوكول الانترنيت لايقدم اليات تحكم بالتدفق او التحكم بالاخطاء',
  //             correct: true,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يقدم تحكم بالتدفق والتحكم بالاخطاء',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت صالح لتطبيقات الوسائط المتعددة ',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
  //             correct: false,
  //           },
  //         ],
  //         explanation:
  //           'TS uses a colon (:) to separate the property name from the property type',
  //       },
  //       {
  //         questionText: 'الخدمة بأفضل جهد في بروتوكول الانترنيت IPV4 :تعني ان',
  //         options: [
  //           {
  //             text: 'بروتوكول الانترنيت لايقدم اليات تحكم بالتدفق او التحكم بالاخطاء',
  //             correct: true,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يقدم تحكم بالتدفق والتحكم بالاخطاء',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت صالح لتطبيقات الوسائط المتعددة ',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
  //             correct: false,
  //           },
  //         ],
  //         explanation:
  //           'TS uses a colon (:) to separate the property name from the property type',
  //       },
  //       {
  //         questionText: 'الخدمة بأفضل جهد في بروتوكول الانترنيت IPV4 :تعني ان',
  //         options: [
  //           {
  //             text: 'بروتوكول الانترنيت لايقدم اليات تحكم بالتدفق او التحكم بالاخطاء',
  //             correct: true,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يقدم تحكم بالتدفق والتحكم بالاخطاء',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت صالح لتطبيقات الوسائط المتعددة ',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
  //             correct: false,
  //           },
  //           {
  //             text: 'بروتوكول الانترنيت يطبق بشكل موثوق ضمن الشبكة البيئية',
  //             correct: false,
  //           },
  //         ],
  //         explanation:
  //           'TS uses a colon (:) to separate the property name from the property type',
  //       },
  //     ]
  //   }));
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }
  nextPage() {
    const totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
  checkLH(option: any) {
    if ('quizes' in localStorage) {
      this.quizesInLocalHost = JSON.parse(localStorage.getItem('quizes')!);
      let quiz = this.quizesInLocalHost.find((element: any) => {
        return element.id == this.currentPage
      });
      if (option.id == quiz?.option.id) {
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
    this.selectOption = option;
    let quiz = {
      'id': quizId,
      'option': option,
    };
    if ('quizes' in localStorage) {
      this.quizesInLocalHost = JSON.parse(localStorage.getItem('quizes')!);
      let existIndex = this.quizesInLocalHost.findIndex((element) => {
        return element.id == quizId;
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
  }
  correctAnswer(quiz?: any) {

    console.log(this.selectOption);
    quiz?.options.forEach((e: any) => document.getElementById(`option${e.id}`)?.setAttribute("style", "border-color:black;"));
    let existIndex = this.quizesInLocalHost.findIndex((element) => {
      return element.id == quiz.id;
    });
    let correctOption = quiz.options.find((element: any) => {
      return element.correct == true
    });
    document.getElementById(`option${correctOption.id}`)?.setAttribute("style", "border-color:#20C4F4;");
    if (existIndex != -1) {
      this.quizesInLocalHost.forEach(element => {
        if (element.option.id != correctOption.id && quiz.id == element.id) {
          document.getElementById(`option${element.option.id}`)?.setAttribute("style", "border-color:red;");
        }
      });
    }
  }
  checkAnswer(option?: any) {
    if (option.correct == true) {
      return true;
    } else if (option.correct == false && this.selectOption != 'undefined' && this.selectOption?.id == option?.id) {
      return false;
    }
    return null;
  }

  moveToQuizEnd() {
    // console.log('quiz')
    this.router.navigate(['/QuizEnd']);
  }


}
