import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatePageComponent } from './graduate-page.component';

describe('GraduatePageComponent', () => {
  let component: GraduatePageComponent;
  let fixture: ComponentFixture<GraduatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
