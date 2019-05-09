import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPoliticsComponent } from './risk-politics.component';

describe('RiskPoliticsComponent', () => {
  let component: RiskPoliticsComponent;
  let fixture: ComponentFixture<RiskPoliticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskPoliticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
