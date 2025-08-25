import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  Power: number;
}


@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html'
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', Power: 9001},
    {id: 2, name: 'Vegeta', Power: 8000},
    {id: 3, name: 'Piccolo', Power: 3000},
  ]);
}
