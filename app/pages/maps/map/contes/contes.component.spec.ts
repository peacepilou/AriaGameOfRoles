import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContesComponent } from './contes.component';

describe('ContesComponent', () => {
  let component: ContesComponent;
  let fixture: ComponentFixture<ContesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
