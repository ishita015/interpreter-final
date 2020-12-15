import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterTrackingComponent } from './interpreter-tracking.component';

describe('InterpreterTrackingComponent', () => {
  let component: InterpreterTrackingComponent;
  let fixture: ComponentFixture<InterpreterTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
