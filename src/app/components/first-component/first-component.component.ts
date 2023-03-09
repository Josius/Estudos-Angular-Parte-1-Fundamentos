import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Josiluldus";
  age: number = 30;
  job = 'Rapaz do computador!';
  hobbies = ["Correr", "Estudar", "Dormir"];
  car = {
    name: "Polus",
    year: 2077,
  };
}
