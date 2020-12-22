import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterProfileComponent } from './interpreter-profile.component';

describe('InterpreterProfileComponent', () => {
  let component: InterpreterProfileComponent;
  let fixture: ComponentFixture<InterpreterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
