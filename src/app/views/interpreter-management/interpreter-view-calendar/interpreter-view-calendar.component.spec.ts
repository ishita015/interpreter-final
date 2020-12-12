import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterViewCalendarComponent } from './interpreter-view-calendar.component';

describe('InterpreterViewCalendarComponent', () => {
  let component: InterpreterViewCalendarComponent;
  let fixture: ComponentFixture<InterpreterViewCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterViewCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterViewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
