import { Component, OnInit, Input } from '@angular/core';
import { Comptences } from 'src/app/models/PJ1';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  @Input() competences: Comptences

  constructor() { }

  ngOnInit(): void {
  }

}
