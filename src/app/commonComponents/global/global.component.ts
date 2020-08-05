import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Pj1, Pj, PJ, Global } from 'src/app/models/PJ1';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnChanges {
  @Input() global: Global;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
