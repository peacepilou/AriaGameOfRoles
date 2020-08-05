import { Component, OnInit, Input } from '@angular/core';
import { Titres } from 'src/app/models/PJ1';

@Component({
  selector: 'app-titres',
  templateUrl: './titres.component.html',
  styleUrls: ['./titres.component.scss']
})
export class TitresComponent implements OnInit {
  @Input() titres: Titres
  constructor() { }

  ngOnInit(): void {
  }

}
