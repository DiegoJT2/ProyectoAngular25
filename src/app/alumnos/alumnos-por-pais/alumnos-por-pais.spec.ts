import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosPorPais } from './alumnos-por-pais';

describe('AlumnosPorPais', () => {
  let component: AlumnosPorPais;
  let fixture: ComponentFixture<AlumnosPorPais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosPorPais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosPorPais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
