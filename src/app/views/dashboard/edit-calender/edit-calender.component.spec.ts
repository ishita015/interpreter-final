import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalenderComponent } from './edit-calender.component';

describe('EditCalenderComponent', () => {
  let component: EditCalenderComponent;
  let fixture: ComponentFixture<EditCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
