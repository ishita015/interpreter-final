import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterProfileInformationComponent } from './interpreter-profile-information.component';

describe('InterpreterProfileInformationComponent', () => {
  let component: InterpreterProfileInformationComponent;
  let fixture: ComponentFixture<InterpreterProfileInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterProfileInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterProfileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
