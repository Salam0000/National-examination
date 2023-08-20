import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Advert } from 'src/app/models/advert';
import { Specialization } from 'src/app/models/specialization';
import { Router } from '@angular/router';
import { Collage } from 'src/app/models/collage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private homeService: HomeService, private router: Router) { }
  url: string = 'http://192.168.31.74:8000/';
  adverts: Advert[] = [];
  collages: Collage[] = [];
  specializations: Specialization[] = [];
  isFetching: boolean = false;

  ngOnInit(): void {
    this.isFetching = true;
    // this.homeService.getAllCollages().subscribe(
    //   (result: any) => {
    //     this.collages = result.data;
    //     console.log(result);
    //   },
    //   (error) => {
    //     alert(error.message);
    //   }
    // );
    this.homeService.getAllSpecializations().subscribe(
      (result: any) => {
        console.log(result);
        if (result.code == 200) {
          this.specializations = result.data;
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
    return this.adverts;
  }

  moveToSpecilazation() {
    this.router.navigate(['/specialization']);
  }
}
