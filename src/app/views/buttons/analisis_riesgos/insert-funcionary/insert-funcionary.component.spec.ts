import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFuncionaryComponent } from './insert-funcionary.component';

describe('InsertFuncionaryComponent', () => {
  let component: InsertFuncionaryComponent;
  let fixture: ComponentFixture<InsertFuncionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFuncionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFuncionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
