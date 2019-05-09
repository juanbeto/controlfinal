import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCausesComponent } from './new-causes.component';

describe('NewCausesComponent', () => {
  let component: NewCausesComponent;
  let fixture: ComponentFixture<NewCausesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCausesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
