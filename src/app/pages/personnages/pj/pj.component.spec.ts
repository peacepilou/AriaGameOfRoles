import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjComponent } from './pj.component';

describe('PjComponent', () => {
  let component: PjComponent;
  let fixture: ComponentFixture<PjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
