import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRisksComponent } from './insert-risks.component';

describe('InsertRisksComponent', () => {
  let component: InsertRisksComponent;
  let fixture: ComponentFixture<InsertRisksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRisksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
