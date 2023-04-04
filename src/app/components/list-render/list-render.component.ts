import { Component } from '@angular/core';

import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

// Abaixo, código usado na aula 18
export class ListRenderComponent {
  animals: Animal[] = [];

// Abaixo, código usado nas aulas 12, 13 e 16
// export class ListRenderComponent {
//   animals: Animal[] = [
//     { name: "Turca", type: "Dog", age: 4, sex: "F" },
//     { name: "Tom", type: "Cat", age: 3, sex: "M" },
//     { name: "Jerry", type: "Mouse", age: 2, sex: "M" },
//     { name: "Cookie", type: "Dogo", age: 5, sex: "M" }
//   ];

  animalDetails = '';
  artigo = '';

  constructor(private listService: ListService) {
    
    this.getAnimals();
  }

  showAge(animal: Animal) {
    (animal.sex == "F") ? this.artigo = 'A' : this.artigo = 'O';

    this.animalDetails = `${this.artigo} ${animal.type} ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo o animal...');
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
