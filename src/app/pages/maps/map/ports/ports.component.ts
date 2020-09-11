import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.scss']
})
export class PortsComponent implements OnChanges {

  @Input() ports;

  constructor() { }

  ngOnChanges(): void {
  }

}
