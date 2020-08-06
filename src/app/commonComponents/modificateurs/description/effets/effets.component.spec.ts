import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffetsComponent } from './effets.component';

describe('EffetsComponent', () => {
  let component: EffetsComponent;
  let fixture: ComponentFixture<EffetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
