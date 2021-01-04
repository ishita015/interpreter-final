import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCalculationAddComponent } from './set-calculation-add.component';

describe('SetCalculationAddComponent', () => {
  let component: SetCalculationAddComponent;
  let fixture: ComponentFixture<SetCalculationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCalculationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCalculationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
