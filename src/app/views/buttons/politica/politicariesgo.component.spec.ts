import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticariesgoComponent } from './politicariesgo.component';

describe('PoliticariesgoComponent', () => {
  let component: PoliticariesgoComponent;
  let fixture: ComponentFixture<PoliticariesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticariesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticariesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
