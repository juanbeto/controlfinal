import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFactorsComponent } from './insert-factors.component';

describe('InsertFactorsComponent', () => {
  let component: InsertFactorsComponent;
  let fixture: ComponentFixture<InsertFactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
