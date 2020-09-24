import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnChanges {
  @Input() description: string[] = [];


  constructor() { }

  ngOnChanges(): void {
  }

}
