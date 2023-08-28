import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Advert } from 'src/app/models/advert';
import { Specialization } from 'src/app/models/specialization';
import { Router } from '@angular/router';
import { Collage } from 'src/app/models/collage';
import { enviroment } from 'src/app/enviroment';
import { Token } from '@angular/compiler';


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
        this.adverts = result.data.sliders.splice(0, 3);
        console.log(this.adverts);
        this.isFetching = false;
      },
      (error) => {
        alert(error.message);
        this.isFetching = false;
      }
    );
    this.homeService.getAllSpecializations().subscribe(
      (result: any) => {
        console.log(result);
        if (result.statuscode == 200) {
          this.specializations = result.data.colleges;
          this.isFetching = false;
        }
      },
      (error) => {
        alert(error.message);
        this.isFetching = false;
      }
    );
  }

  getTotalAdverts() {
    console.log(this.adverts);
    return this.adverts;
  }

  moveToSpecilazationById(uuid: number) {
    let token = localStorage.getItem('token');
    let college = localStorage.getItem('college');
    if ('token' in localStorage) {
      if ('college' in localStorage && JSON.parse(localStorage.getItem('college')!)!.uuid == uuid) {
        this.router.navigate([`/specialization/${uuid}`]);
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
