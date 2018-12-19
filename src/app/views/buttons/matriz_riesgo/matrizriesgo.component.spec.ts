import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizriesgoComponent } from './matrizriesgo.component';

describe('MatrizriesgoComponent', () => {
  let component: MatrizriesgoComponent;
  let fixture: ComponentFixture<MatrizriesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrizriesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
