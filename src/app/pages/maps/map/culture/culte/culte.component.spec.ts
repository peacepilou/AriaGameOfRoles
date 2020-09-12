import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulteComponent } from './culte.component';

describe('CulteComponent', () => {
  let component: CulteComponent;
  let fixture: ComponentFixture<CulteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
