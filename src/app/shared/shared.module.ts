import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RectangleComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    RectangleComponent
  ]
})
export class SharedModule { }
