import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Advert } from 'src/app/models/advert';
import { Specialization } from 'src/app/models/specialization';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private homeService: HomeService, private router: Router) { }

  adverts: Advert[] = [];
  specializations: Specialization[] = [];
  isFetching: boolean = false;

  ngOnInit(): void {
    this.isFetching = true;
    this.homeService.getAllAdverts().subscribe(
      (result) => {
        this.adverts = result;
        console.log(result);
        console.log(result[0].image);
      },
      (error) => {
        alert(error.message);
      }
    );
    this.homeService.getAllSpecializations().subscribe(
      (result) => {
        this.specializations = result;
        console.log(result);
        console.log(result[0].image);
      },
      (error) => {
        alert(error.message);
      }
    );
    this.isFetching = false;
  }

  getTotalAdverts() {
    return this.adverts;
  }

  moveToSpecilazation(){
    this.router.navigate(['/specialization']);
  }
}
