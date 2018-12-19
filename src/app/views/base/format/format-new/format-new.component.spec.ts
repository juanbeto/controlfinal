import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatNewComponent } from './format-new.component';

describe('FormatNewComponent', () => {
  let component: FormatNewComponent;
  let fixture: ComponentFixture<FormatNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
