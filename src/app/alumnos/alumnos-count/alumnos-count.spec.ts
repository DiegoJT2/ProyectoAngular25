import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosCount } from './alumnos-count';

describe('AlumnosCount', () => {
  let component: AlumnosCount;
  let fixture: ComponentFixture<AlumnosCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
