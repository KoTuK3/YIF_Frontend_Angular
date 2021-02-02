import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateCardComponent } from './graduate-card.component.ts';

describe('GraduateComponent', () => {
  let component: GraduateCardComponent;
  let fixture: ComponentFixture<GraduateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
