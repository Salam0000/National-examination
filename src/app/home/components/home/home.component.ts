import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Advert } from 'src/app/models/advert';
import { Specialization } from 'src/app/models/specialization';
import { Router } from '@angular/router';
import { Collage } from 'src/app/models/collage';
import { enviroment } from 'src/app/enviroment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private homeService: HomeService, private router: Router) { }
  url: string = '';
  adverts: Advert[] = [];
  collages: Collage[] = [];
  specializations: Specialization[] = [];
  specializationsId!: string;
  isFetching: boolean = false;
  isButton: boolean = false;

  ngOnInit(): void {
    this.isFetching = true;
    this.specializationsId = localStorage.getItem('specialization_id') ?? '';
    // // this.homeService.checkButtons().subscribe((result: any) => {
    // //   this.isButton = result.data;
    // // })
    this.url = enviroment.base;
    this.homeService.getAllAdverts().subscribe(
      (result: any) => {
        if (result.statuscode == 200) {
          this.adverts = result.data.sliders;
          // this.adverts = result.data.sliders;
          if (this.adverts.length == 0) {
            document.getElementById("carousel")?.setAttribute("style", "display:none;");
            document.getElementById("container")?.setAttribute("style", "display: block");
            document.getElementById("container")?.setAttribute("style", "grid-template-columns: repeat(1, 80%)");
          }
          this.isFetching = false;
        } else {
          alert(result.message);
          this.isFetching = false;
        }
      },
      (_) => {
        alert('الرجاء التحقق من سلامة الاتصال لديك');
        this.isFetching = false;
      }
    );
    this.homeService.getAllSpecializations().subscribe(
      (result: any) => {
        if (result.statuscode == 200) {
          this.specializations = result.data.colleges;
          this.isFetching = false;
        } else {
          alert(result.message);
          this.isFetching = false;
        }
      },
      (_) => {
        alert('الرجاء التحقق من سلامة الاتصال لديك');
        this.isFetching = false;
      }
    );
  }
  getTotalAdverts() {
    return this.adverts;
  }
  moveToQuizStart() {
    if ('token' in localStorage) {
      this.router.navigate(['QuizStart', { id: -1, type: "بنك الأسئلة" }]);
    } else {
      alert('يرجى تسجيل الدخول')
    }
  }
  moveToSpecilazationById(special: Specialization) {
    if ('token' in localStorage) {
      if ('college' in localStorage && JSON.parse(localStorage.getItem('college')!)!.uuid == special.uuid) {
      if (special.is_master != true) {
        this.router.navigate([`/specialization/${special.uuid}`]);
      }else{
        alert('يرجى اختيار النوع')
      }
      } else {
        alert('عذرا, لا يمكنك الدخول  لهذا التخصص')
      }
    } else {
      alert('يرجى تسجيل الدخول')
    }
  }
  moveToSpecilazationByType(type: string) {
    this.router.navigate([`/specialization/${type}`]);
  }

}
