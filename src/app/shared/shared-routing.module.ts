import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecializationSelectionComponent } from '../specialization-selection/components/specialization-selection/specialization-selection.component';
import { HomeComponent } from '../home/components/home/home.component';
import { ProfileComponent } from '../profile/components/profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'specialization', component: SpecializationSelectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
