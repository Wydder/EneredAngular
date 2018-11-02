import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sedinta1Component } from "src/app/sedinta1/sedinta1.component";
import { Sedinta2Component } from "src/app/sedinta2/sedinta2.component";
import { Sedinta3Component } from "src/app/sedinta3/sedinta3.component";
import { Sedinta5Component } from "src/app/sedinta5/sedinta5.component";

const routes: Routes = [
  {
    path: 'sedinta1',
    component: Sedinta1Component
  },
  {
    path: 'sedinta2',
    component: Sedinta2Component
  },
  {
    path: 'sedinta3',
    component: Sedinta3Component
  },
  {
    path: 'sedinta5',
    component: Sedinta5Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
