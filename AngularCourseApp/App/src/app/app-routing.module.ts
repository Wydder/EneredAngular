import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { NotFoundComponent } from "src/app/not-found/not-found.component";
import { HomeComponent } from "src/app/home/home.component";
import { CourseLibraryComponent } from "src/app/course-library/course-library.component";
import { IntroductionComponent } from './introduction/introduction.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { TodoAppComponent } from './todo-app/todo-app.component';


const routes: Routes = [
  //CourseLibrary
  {
    path: 'Course-library',
    component: CourseLibraryComponent
  },
  {
    path: 'Course-library/Introduction',
    component: IntroductionComponent
  },
  {
    path: 'Course-library/Exercises',
    component: ExercisesComponent
  },

  //Todo-App
  {
    path: 'Todo-App',
    component: TodoAppComponent
  },

  //General
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
