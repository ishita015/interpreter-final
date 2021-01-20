import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterAddComponent } from './interpreter-add.component';

describe('InterpreterAddComponent', () => {
  let component: InterpreterAddComponent;
  let fixture: ComponentFixture<InterpreterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
