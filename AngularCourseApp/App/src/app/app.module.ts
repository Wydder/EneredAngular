import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseLibraryComponent } from './course-library/course-library.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseLibraryComponent,
    NotFoundComponent,
    IntroductionComponent,
    ExercisesComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
