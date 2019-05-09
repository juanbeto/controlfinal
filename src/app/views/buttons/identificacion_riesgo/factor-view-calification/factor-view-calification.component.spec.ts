import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorViewCalificationComponent } from './factor-view-calification.component';

describe('FactorViewCalificationComponent', () => {
  let component: FactorViewCalificationComponent;
  let fixture: ComponentFixture<FactorViewCalificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorViewCalificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorViewCalificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
