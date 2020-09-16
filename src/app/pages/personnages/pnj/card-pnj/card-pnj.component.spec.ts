import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPnjComponent } from './card-pnj.component';

describe('CardPnjComponent', () => {
  let component: CardPnjComponent;
  let fixture: ComponentFixture<CardPnjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPnjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
