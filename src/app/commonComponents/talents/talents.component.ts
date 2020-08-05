import { Component, OnInit, Input } from '@angular/core';
import { Talents } from 'src/app/models/PJ1';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnInit {
  @Input() talents: Talents
  constructor() { }

  ngOnInit(): void {
  }

}
