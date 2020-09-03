import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurnomComponent } from './surnom.component';

describe('SurnomComponent', () => {
  let component: SurnomComponent;
  let fixture: ComponentFixture<SurnomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurnomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurnomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
