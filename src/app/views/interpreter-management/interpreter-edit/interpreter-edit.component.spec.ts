import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterEditComponent } from './interpreter-edit.component';

describe('InterpreterEditComponent', () => {
  let component: InterpreterEditComponent;
  let fixture: ComponentFixture<InterpreterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
