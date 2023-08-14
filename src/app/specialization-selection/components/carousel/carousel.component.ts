import { Component, Input } from '@angular/core';
import { Advert } from 'src/app/models/advert';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input('adverts') adverts: Advert[] = [];
  
}
