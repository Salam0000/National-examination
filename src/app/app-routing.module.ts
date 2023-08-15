import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './home/components/home/home.component';
import { RegisterComponent } from './auth/components/register/register.component';

import { SpecializationSelectionComponent } from './specialization-selection/components/specialization-selection/specialization-selection.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: '/', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'specializationSelection', component: SpecializationSelectionComponent },
  // { path: 'home', component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
