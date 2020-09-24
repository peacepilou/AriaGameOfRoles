import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent implements OnChanges {
  @Input() lore: string;
  constructor() { }

  ngOnChanges(): void {
    if(this.lore){
      // console.log(this.lore);
    }
  }
}
