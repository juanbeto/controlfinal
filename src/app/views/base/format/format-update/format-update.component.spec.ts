import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatUpdateComponent } from './format-update.component';

describe('FormatUpdateComponent', () => {
  let component: FormatUpdateComponent;
  let fixture: ComponentFixture<FormatUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
