import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterDetailsComponent } from './interpreter-details.component';

describe('InterpreterDetailsComponent', () => {
  let component: InterpreterDetailsComponent;
  let fixture: ComponentFixture<InterpreterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
