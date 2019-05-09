import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsecuencesComponent } from './new-consecuences.component';

describe('NewConsecuencesComponent', () => {
  let component: NewConsecuencesComponent;
  let fixture: ComponentFixture<NewConsecuencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConsecuencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsecuencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
