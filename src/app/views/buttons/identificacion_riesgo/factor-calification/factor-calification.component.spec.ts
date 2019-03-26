import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorCalificationComponent } from './factor-calification.component';

describe('FactorCalificationComponent', () => {
  let component: FactorCalificationComponent;
  let fixture: ComponentFixture<FactorCalificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorCalificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorCalificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
