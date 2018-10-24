import { Component } from '@angular/core';
import { Car } from 'src/classes/car';
import { Employee, GenderType } from 'src/classes/employee';
import { Zoo, Monkey, Pigeon } from 'src/classes/zoo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App';
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
    var birdie = new Pigeon();

    zoo.addAnimal(monkey1);
    zoo.addAnimal(monkey2);
    zoo.addAnimal(birdie);

    zoo.alarm();
  }
}


