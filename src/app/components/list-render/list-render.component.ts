import { Component } from '@angular/core';

import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name:"Turca", type:"Dog", age: 4, sex:"F"},
    {name:"Tom", type:"Cat", age: 3, sex:"M"},
    {name:"Jerry", type:"Mouse", age: 2, sex:"M"},
    {name:"Cookie", type:"Dogo", age: 5, sex:"M"}
  ];

  animalDetails = '';
  artigo = '';

  showAge(animal: Animal){
    (animal.sex == "F") ? this.artigo = 'A' : this.artigo = 'O';
    
    this.animalDetails = `${this.artigo} ${animal.type} ${animal.name} tem ${animal.age} anos`;
  }
}
