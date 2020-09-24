import { Component, OnChanges, Input } from '@angular/core';
import { Calendrier, Jours } from 'app/models/Maps';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnChanges {

  @Input() calendrier: Calendrier[];
  jours: Jours;
  mois: string[];
  constructor() { }

  ngOnChanges(): void {
  }
}
