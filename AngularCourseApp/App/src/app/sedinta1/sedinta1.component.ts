import { Component, OnInit } from '@angular/core';
import { Car } from "src/classes/car";
import { Employee, GenderType } from "src/classes/employee";
import { Monkey, Zoo, Pigeon } from "src/classes/zoo";

@Component({
  selector: 'app-sedinta1',
  templateUrl: './sedinta1.component.html',
  styleUrls: ['./sedinta1.component.css']
})
export class Sedinta1Component implements OnInit {

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

    zoo.addAnimal(monkey1);
    zoo.addAnimal(monkey2);
    zoo.addAnimal(stupidPigeon);

    zoo.alarm();
  }

  ngOnInit() {
    
  }

}
