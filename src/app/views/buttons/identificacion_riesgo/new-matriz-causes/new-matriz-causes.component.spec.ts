import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMatrizCausesComponent } from './new-matriz-causes.component';

describe('NewMatrizCausesComponent', () => {
  let component: NewMatrizCausesComponent;
  let fixture: ComponentFixture<NewMatrizCausesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMatrizCausesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMatrizCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
