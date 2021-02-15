import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestListSchedularComponent } from './all-request-list-schedular.component';

describe('AllRequestListSchedularComponent', () => {
  let component: AllRequestListSchedularComponent;
  let fixture: ComponentFixture<AllRequestListSchedularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRequestListSchedularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestListSchedularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
