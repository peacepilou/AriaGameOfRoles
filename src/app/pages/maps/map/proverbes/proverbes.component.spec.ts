import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverbesComponent } from './proverbes.component';

describe('ProverbesComponent', () => {
  let component: ProverbesComponent;
  let fixture: ComponentFixture<ProverbesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProverbesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProverbesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
