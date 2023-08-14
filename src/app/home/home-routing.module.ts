import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecializationSelectionComponent } from '../specialization-selection/components/specialization-selection/specialization-selection.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'specialization', component: SpecializationSelectionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
