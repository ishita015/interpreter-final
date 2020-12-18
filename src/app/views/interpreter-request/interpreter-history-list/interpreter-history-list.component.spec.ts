import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpreterHistoryListComponent } from './interpreter-history-list.component';

describe('InterpreterHistoryListComponent', () => {
  let component: InterpreterHistoryListComponent;
  let fixture: ComponentFixture<InterpreterHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpreterHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpreterHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
