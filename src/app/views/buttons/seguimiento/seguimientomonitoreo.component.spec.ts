import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientomonitoreoComponent } from './seguimientomonitoreo.component';

describe('SeguimientomonitoreoComponent', () => {
  let component: SeguimientomonitoreoComponent;
  let fixture: ComponentFixture<SeguimientomonitoreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientomonitoreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientomonitoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
