import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisriesgoComponent } from './analisisriesgo.component';

describe('AnalisisriesgoComponent', () => {
  let component: AnalisisriesgoComponent;
  let fixture: ComponentFixture<AnalisisriesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisriesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
