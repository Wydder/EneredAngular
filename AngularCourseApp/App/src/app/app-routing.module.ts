import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sedinta1Component } from "src/app/sedinta1/sedinta1.component";
import { Sedinta2Component } from "src/app/sedinta2/sedinta2.component";
import { Sedinta3Component } from "src/app/sedinta3/sedinta3.component";
import { Sedinta5Component } from "src/app/sedinta5/sedinta5.component";
import { AppComponent } from "src/app/app.component";
import { NotFoundComponent } from "src/app/not-found/not-found.component";
import { HomeComponent } from "src/app/home/home.component";
import { CourseLibraryComponent } from "src/app/course-library/course-library.component";

const routes: Routes = [
  {
    path: 'Course-library/sedinta1',
    component: Sedinta1Component
  },
  {
    path: 'Course-library/sedinta2',
    component: Sedinta2Component
  },
  {
    path: 'Course-library/sedinta3',
    component: Sedinta3Component
  },
  {
    path: 'Course-library/sedinta5',
    component: Sedinta5Component
  },
  {
    path: 'Course-library',
    component: CourseLibraryComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
