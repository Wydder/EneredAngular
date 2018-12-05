import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { NotFoundComponent } from "src/app/not-found/not-found.component";
import { HomeComponent } from "src/app/home/home.component";
import { CourseLibraryComponent } from "src/app/course-library/course-library.component";
import { IntroductionComponent } from './course-library/introduction/introduction.component';
import { ExercisesComponent } from './course-library/exercises/exercises.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { GarageAppComponent } from './garage-app/garage-app.component';
import { UserComponent } from './userexercise/user/user.component';
import { UserexerciseComponent } from './userexercise/userexercise.component';
import { TictacAppComponent } from './tictac-app/tictac-app.component';
import { PassGameAppComponent } from './pass-game-app/pass-game-app.component';
import { CarFormComponent } from './car-form/car-form.component';
import { AnotherTypeOfFormComponent } from './another-type-of-form/another-type-of-form.component';


const routes: Routes = [
  //CourseLibrary
  {
    path: 'course-library',
    component: CourseLibraryComponent
  },
  {
    path: 'course-library/introduction',
    component: IntroductionComponent
  },
  {
    path: 'course-library/exercises',
    component: ExercisesComponent
  },

  //Todo-App
  {
    path: 'todo-app',
    component: TodoAppComponent
  },

  //Garage-App
  {
    path: 'garage-app',
    component: GarageAppComponent
  },
  //User exercise
  {
    path: 'user-exercise',
    component: UserexerciseComponent
  },
  {
    path: 'tictac-app',
    component: TictacAppComponent
  },
  {
    path: 'pass-game-app',
    component: PassGameAppComponent
  },
  {
    path: 'car-form',
    component: CarFormComponent
  },
  {
    path: 'another-type-of-form',
    component: AnotherTypeOfFormComponent
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
