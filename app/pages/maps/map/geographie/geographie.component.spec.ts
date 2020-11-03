import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographieComponent } from './geographie.component';

describe('GeographieComponent', () => {
  let component: GeographieComponent;
  let fixture: ComponentFixture<GeographieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeographieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
