import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecializationSelectionComponent } from './components/specialization-selection/specialization-selection.component';
import { SharedModule } from '../shared/shared.module';
// import { CarouselComponent } from '../home/components/carousel/carousel.component';
import { CarouselComponent } from './components/carousel/carousel.component';
// import { CarouselComponent } from './components/specialization-selection/carousel/carousel.component';

@NgModule({
  declarations: [
    SpecializationSelectionComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class SpecializationSelectionModule { }
