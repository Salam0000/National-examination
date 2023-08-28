import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule, MatDialogModule
  ],
  exports: [
    CarouselComponent,
    HomeComponent
  ]
})
export class HomeModule { }
