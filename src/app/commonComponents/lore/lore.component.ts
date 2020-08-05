import { Component, OnInit, Input } from '@angular/core';
import { Lore } from 'src/app/models/PJ1';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent implements OnInit {

  @Input() lore: Lore
  constructor() { }

  ngOnInit(): void {
  }

}
