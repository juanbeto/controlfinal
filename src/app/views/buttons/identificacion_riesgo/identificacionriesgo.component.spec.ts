import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionriesgoComponent } from './identificacionriesgo.component';

describe('IdentificacionriesgoComponent', () => {
  let component: IdentificacionriesgoComponent;
  let fixture: ComponentFixture<IdentificacionriesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacionriesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
