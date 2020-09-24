import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonnaieComponent } from './monnaie.component';

describe('MonnaieComponent', () => {
  let component: MonnaieComponent;
  let fixture: ComponentFixture<MonnaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonnaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonnaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
