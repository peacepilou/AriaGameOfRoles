import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertoirePotionComponent } from './repertoire-potion.component';

describe('RepertoirePotionComponent', () => {
  let component: RepertoirePotionComponent;
  let fixture: ComponentFixture<RepertoirePotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepertoirePotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoirePotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
