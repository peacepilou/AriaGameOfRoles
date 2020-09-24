import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPjComponent } from './card-pj.component';

describe('CardPjComponent', () => {
  let component: CardPjComponent;
  let fixture: ComponentFixture<CardPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
