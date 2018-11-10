import { Component, OnInit } from '@angular/core';
import { CourseLibraryComponent } from "src/app/course-library/course-library.component";
import { ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Choose your path"

  constructor() {
  }

  ngOnInit() {
    
  }

  //enter() {
  //  var library = new CourseLibraryComponent();
  //}



}
