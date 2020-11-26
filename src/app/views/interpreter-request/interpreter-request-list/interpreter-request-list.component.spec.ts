import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterRequestListComponent } from './interpreter-request-list.component';

describe('InterpreterRequestListComponent', () => {
  let component: InterpreterRequestListComponent;
  let fixture: ComponentFixture<InterpreterRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
