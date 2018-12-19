import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionriesgoComponent } from './valoracionriesgo.component';

describe('ValoracionriesgoComponent', () => {
  let component: ValoracionriesgoComponent;
  let fixture: ComponentFixture<ValoracionriesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionriesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
