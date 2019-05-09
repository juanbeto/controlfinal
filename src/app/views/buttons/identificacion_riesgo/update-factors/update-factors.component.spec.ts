import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFactorsComponent } from './update-factors.component';

describe('UpdateFactorsComponent', () => {
  let component: UpdateFactorsComponent;
  let fixture: ComponentFixture<UpdateFactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
