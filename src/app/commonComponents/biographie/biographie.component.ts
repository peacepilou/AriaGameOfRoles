import { Component, OnInit, Input } from '@angular/core';
import { Biographie } from 'src/app/models/PJ1';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.scss']
})
export class BiographieComponent implements OnInit {
  @Input() biographie: Biographie
  constructor() { }

  ngOnInit(): void {
  }

}
