import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecializationSelectionComponent } from './components/specialization-selection/specialization-selection.component';
import { SharedModule } from '../shared/shared.module';
// import { CarouselComponent } from '../home/components/carousel/carousel.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PopUpClassificationComponent } from './components/pop-up-classification/pop-up-classification.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { CarouselComponent } from './components/specialization-selection/carousel/carousel.component';

@NgModule({
  declarations: [
    SpecializationSelectionComponent,
    CarouselComponent,
    PopUpClassificationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule
  ], 
  exports: [
    SpecializationSelectionComponent
  ]
})
export class SpecializationSelectionModule { }
