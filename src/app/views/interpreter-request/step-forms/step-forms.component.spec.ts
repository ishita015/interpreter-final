import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFormsComponent } from './step-forms.component';

describe('StepFormsComponent', () => {
  let component: StepFormsComponent;
  let fixture: ComponentFixture<StepFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
