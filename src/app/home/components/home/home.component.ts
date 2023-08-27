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

  // ngOnInit(): void { 
  //   this.isFetching = true;
  //   this.specializationsId = localStorage.getItem('specialization_id') ?? '';
  //   this.homeService.checkButtons().subscribe((result: any) => {
  //     this.isButton = result.data;
  //   })
  //   this.url = enviroment.base;
  //   this.homeService.getAllAdverts().subscribe(
  //     (result: any) => {
  //       this.adverts = result.data;
  //       console.log(result.data);
  //     },
  //     (error) => {
  //       alert(error.message);
  //     }
  //   );
  //   this.homeService.getAllSpecializations().subscribe(
  //     (result: any) => {
  //       console.log(result);
  //       if (result.code == 200) {
  //         this.specializations = result.data;
  //         this.isFetching = false;
  //       }
  //     },
  //     (error) => {
  //       alert(error.message);
  //       this.isFetching = false;
  //     }
  //   );
  // }

  getTotalAdverts() {
    console.log(this.adverts);
    return this.adverts;
  }

  moveToSpecilazationById(uuid: number) {
    this.router.navigate([`/specialization/${uuid}`]);
  }

  moveToSpecilazationByType(type: string) {
    this.router.navigate([`/specialization/${type}`]);
  }
  
  // notification
  // Notification.requestPermission(function(permission) {
  //   if (permission == 'granted') {
  //     var notification = new Notification(
  //       "Title",
  //       {
  //         body: 'HTML5 Web Notification API', data: { hello: 'world  ' },
  //         tag: 'id',
  //         icon: 'https://i.stack.imgur.com/Jzjhz.png?s=48&g=1', dir: 'auto'
  //       });
  //     setTimeout(function () {
  //       notification.close();
  //     }, 3000);
  //     notification.addEventListener('show', e => { console.log(e) });//show error colse
  //   }

  // });

}
