import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoFormulario } from './alumno-formulario';

describe('AlumnoFormulario', () => {
  let component: AlumnoFormulario;
  let fixture: ComponentFixture<AlumnoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
