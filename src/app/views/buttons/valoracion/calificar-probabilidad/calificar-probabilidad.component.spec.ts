import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarProbabilidadComponent } from './calificar-probabilidad.component';

describe('CalificarProbabilidadComponent', () => {
  let component: CalificarProbabilidadComponent;
  let fixture: ComponentFixture<CalificarProbabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarProbabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarProbabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
