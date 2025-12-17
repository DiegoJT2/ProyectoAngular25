import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAlumno } from './un-alumno';

describe('UnAlumno', () => {
  let component: UnAlumno;
  let fixture: ComponentFixture<UnAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnAlumno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnAlumno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
