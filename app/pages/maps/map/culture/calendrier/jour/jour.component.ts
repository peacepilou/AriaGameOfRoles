import { Component, OnChanges, Input } from '@angular/core';
import { Jours } from 'app/models/Maps';

@Component({
  selector: 'app-jour',
  templateUrl: './jour.component.html',
  styleUrls: ['./jour.component.scss']
})
export class JourComponent implements OnChanges {

  @Input() jours: Jours;
  constructor() { }

  ngOnChanges(): void {
  }

}
