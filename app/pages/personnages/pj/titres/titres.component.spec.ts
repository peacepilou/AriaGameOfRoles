import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitresComponent } from './titres.component';

describe('TitresComponent', () => {
  let component: TitresComponent;
  let fixture: ComponentFixture<TitresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
