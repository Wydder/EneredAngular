import { Component, OnInit } from '@angular/core';
import { Car } from "src/classes/car";
import { Employee, GenderType } from "src/classes/employee";
import { Monkey, Zoo, Pigeon } from "src/classes/zoo";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor() {
    let opel = new Car('Opel');
    let vw = new Car('Volkswagen');
    let employee1 = new Employee("Ion", "Vasile", GenderType.male);
    console.log(employee1.lastName);
    console.log(opel);
    console.log(vw);
    var zoo = new Zoo();


    var monkey1 = new Monkey();
    var monkey2 = new Monkey();
    var stupidPigeon = new Pigeon();
    var birdie = new Pigeon();

    zoo.addAnimal(monkey1);
    zoo.addAnimal(monkey2);
    zoo.addAnimal(stupidPigeon);
    zoo.addAnimal(birdie);

    zoo.alarm();
  }

  ngOnInit() {
  }

}
