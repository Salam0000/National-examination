import { Component, Input } from '@angular/core';
import { Advert } from 'src/app/models/advert';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input('adverts') adverts: Advert[] = [];

  ngOnInit() {
    console.log('advert');
    console.log(this.adverts);
    // for (let advert in this.adverts) {
    //   console.log(advert.image_url);
    // }
    for (let index = 0; index < this.adverts.length; index++) {
      console.log(this.adverts[index].image_url);
    }
  }
}
