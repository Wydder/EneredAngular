import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseLibraryComponent } from './course-library/course-library.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroductionComponent } from './course-library/introduction/introduction.component';
import { ExercisesComponent } from './course-library/exercises/exercises.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { TodoelementComponent } from './todo-app/todoelement/todoelement.component';
import { GarageAppComponent } from './garage-app/garage-app.component';
import { UserexerciseComponent } from './userexercise/userexercise.component';
import { UserComponent } from './userexercise/user/user.component';
import { AddUserComponent } from './userexercise/add-user/add-user.component';
import { TictacAppComponent } from './tictac-app/tictac-app.component';
import { PassGameAppComponent } from './pass-game-app/pass-game-app.component';
import { PlayerComponent } from './pass-game-app/player/player.component';
import { AddTodoComponent } from './todo-app/add-todo/add-todo.component';
import { BoxComponent } from './tictac-app/box/box.component';
import { CarFormComponent } from './car-form/car-form.component';
import { AnotherTypeOfFormComponent } from './another-type-of-form/another-type-of-form.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpModule } from '@angular/http';
import { AddCarComponent } from './car-form/add-car/add-car.component';
import { EditCarComponent } from './car-form/edit-car/edit-car.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseLibraryComponent,
    NotFoundComponent,
    IntroductionComponent,
    ExercisesComponent,
    TodoAppComponent,
    TodoelementComponent,
    GarageAppComponent,
    UserexerciseComponent,
    UserComponent,
    AddUserComponent,
    TictacAppComponent,
    PassGameAppComponent,
    PlayerComponent,
    AddTodoComponent,
    BoxComponent,
    CarFormComponent,
    AnotherTypeOfFormComponent,
    ObservableComponent,
    AddCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }
