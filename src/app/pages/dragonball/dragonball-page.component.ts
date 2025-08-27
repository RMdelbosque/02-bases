import { Component, computed, signal } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-page.component.html'
})
export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(100);
  
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
  ]);

  // powerClasses = computed (() => {
  //   return{
  //     'text-danger': true
  //   }
  // })

  addCharacter() {
    // const newId = this.characters.length + 1;
    // const newCharacter = signal<Character>({id: newId, name: this.name(), power: this.power()});
    // this.characters().push(newCharacter());

    if (!this.name() || !this.power() || this.power() <= 0 ){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length +1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [... list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
