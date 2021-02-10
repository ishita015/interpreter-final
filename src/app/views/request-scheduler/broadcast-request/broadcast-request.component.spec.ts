import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastRequestComponent } from './broadcast-request.component';

describe('BroadcastRequestComponent', () => {
  let component: BroadcastRequestComponent;
  let fixture: ComponentFixture<BroadcastRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
