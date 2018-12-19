import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitieNewComponent } from './activitie-new.component';

describe('ActivitieNewComponent', () => {
  let component: ActivitieNewComponent;
  let fixture: ComponentFixture<ActivitieNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitieNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitieNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
