import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sedinta1Component } from './sedinta1/sedinta1.component';
import { Sedinta2Component } from './sedinta2/sedinta2.component';
import { Sedinta3Component } from './sedinta3/sedinta3.component';
import { Sedinta5Component } from './sedinta5/sedinta5.component';
import { HomeComponent } from './home/home.component';
import { CourseLibraryComponent } from './course-library/course-library.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    Sedinta1Component,
    Sedinta2Component,
    Sedinta3Component,
    Sedinta5Component,
    HomeComponent,
    CourseLibraryComponent,
    NotFoundComponent
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
