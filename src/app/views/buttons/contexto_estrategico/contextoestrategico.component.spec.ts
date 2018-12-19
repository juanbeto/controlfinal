import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoestrategicoComponent } from './contextoestrategico.component';

describe('ContextoestrategicoComponent', () => {
  let component: ContextoestrategicoComponent;
  let fixture: ComponentFixture<ContextoestrategicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoestrategicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoestrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
