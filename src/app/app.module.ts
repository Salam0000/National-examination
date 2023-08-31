import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SpecializationSelectionModule } from './specialization-selection/specialization-selection.module';
import { ProfileModule } from './profile/profile.module';
import { QuizModule } from './quiz/quiz.module';
import { FavouriteModule } from './favourite/favourite.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AuthModule,
    SharedModule,
    HomeModule,
    SpecializationSelectionModule,
    ProfileModule,
    QuizModule,
    FavouriteModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
