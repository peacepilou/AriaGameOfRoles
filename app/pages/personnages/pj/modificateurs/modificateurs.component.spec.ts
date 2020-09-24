import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificateursComponent } from './modificateurs.component';

describe('ModificateursComponent', () => {
  let component: ModificateursComponent;
  let fixture: ComponentFixture<ModificateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
