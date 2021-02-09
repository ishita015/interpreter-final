import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestSchedularComponent } from './all-request-schedular.component';

describe('AllRequestSchedularComponent', () => {
  let component: AllRequestSchedularComponent;
  let fixture: ComponentFixture<AllRequestSchedularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRequestSchedularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestSchedularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
