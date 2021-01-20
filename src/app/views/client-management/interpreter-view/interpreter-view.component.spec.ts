import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterViewComponent } from './interpreter-view.component';

describe('InterpreterViewComponent', () => {
  let component: InterpreterViewComponent;
  let fixture: ComponentFixture<InterpreterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
