import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestListsComponent } from './all-request-lists.component';

describe('AllRequestListsComponent', () => {
  let component: AllRequestListsComponent;
  let fixture: ComponentFixture<AllRequestListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRequestListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
