import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.scss']
})
export class CaracteristiquesComponent implements OnChanges {

  @Input() caracteristiques;
  imageList: any[] = [];
  c: string[] = [];

  constructor() {
    this.imageList = [
      'assets/pv.png',
      'assets/strenght.png',
      'assets/dexterity.png',
      'assets/stamina.png',
      'assets/charisma.png',
      'assets/close-fight.png',
      'assets/distant-fight.png',
      'assets/talk.png',
      'assets/dice.png',
      'assets/armor.png'
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.caracteristiques) {
      if (Object.prototype.hasOwnProperty.call(this.caracteristiques, key)) {
        const element = this.caracteristiques[key];
        this.c.push(key + ' : ' + element);
      }
    }
  }

}
