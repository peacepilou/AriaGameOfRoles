import { Component, OnInit, Input } from '@angular/core';
import { Modificateurs } from 'src/app/models/PJ1';

@Component({
  selector: 'app-modificateurs',
  templateUrl: './modificateurs.component.html',
  styleUrls: ['./modificateurs.component.scss']
})
export class ModificateursComponent implements OnInit {
  @Input() modificateurs: Modificateurs
  constructor() { }

  ngOnInit(): void {
  }

}
