import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from '../shared/components/header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FilterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
