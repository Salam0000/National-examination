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
    document.getElementById('image0')?.setAttribute("style", "background-color:#6F2877;");
  }
  paginate(id: number) {
    let buttons = document.querySelectorAll('.buttons');
    buttons.forEach(e => e.setAttribute("style", "background-color:transparent;"));
    document.getElementById(`button${id}`)?.setAttribute("style", "background-color:#6F2877;");
    let images = document.querySelectorAll('.image_container');
    images.forEach(e => e.classList.remove("active"));
    document.getElementById(`image${id}`)?.classList.add("active");
  }
}

