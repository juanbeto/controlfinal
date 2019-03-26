import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorCalificationDetailComponent } from './factor-calification-detail.component';

describe('FactorCalificationDetailComponent', () => {
  let component: FactorCalificationDetailComponent;
  let fixture: ComponentFixture<FactorCalificationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorCalificationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorCalificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
