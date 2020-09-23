import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Comptences } from 'src/app/models/PJ1';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnChanges {

  @Input() competences: Comptences;
  c: string[] = [];
  imageList = []

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for (const key in this.competences) {
      if (Object.prototype.hasOwnProperty.call(this.competences, key)) {
        const element = this.competences[key];
        this.c.push(key + ' : ' + element)
      }
    }
    this.setImageList();
  }
  setImageList() {
    const atlanAssets = [
      'assets/competences/perception.svg',
      'assets/competences/discretion.svg',
      'assets/competences/convince.svg',
      'assets/competences/read.svg',
      'assets/competences/robber-hand.svg',
    ]
    const clodomirAssets = [
      'assets/competences/perception.svg',
      'assets/competences/discretion.svg',
      'assets/competences/convince.svg',
      'assets/competences/read.svg',
      'assets/competences/crafting.svg',
      'assets/competences/giant.svg',
    ]
    const keitraAssets = [
      'assets/competences/perception.svg',
      'assets/competences/discretion.svg',
      'assets/competences/convince.svg',
      'assets/competences/read.svg',
      'assets/competences/surprised.svg'
    ]
    const niklasAssets = [
      'assets/competences/perception.svg',
      'assets/competences/discretion.svg',
      'assets/competences/convince.svg',
      'assets/competences/read.svg',
      'assets/competences/run.svg',
      'assets/competences/giant.svg',
      'assets/competences/robber-hand.svg',
      'assets/competences/heal.svg',
      'assets/competences/trap.svg',
      'assets/competences/surprised.svg',
      'assets/competences/crafting.svg'
    ]

    if (this.competences["Serrures et pièges"]) {
      this.imageList = niklasAssets;
    } else {
      if (this.competences.Voler) {
        this.imageList = atlanAssets
      }
      if (this.competences.Intimider) {
        this.imageList = clodomirAssets;
      }
      if (this.competences.Réflexes){
        this.imageList = keitraAssets;
      }
    }
  }
}
