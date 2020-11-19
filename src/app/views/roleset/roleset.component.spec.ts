import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesetComponent } from './roleset.component';

describe('RolesetComponent', () => {
  let component: RolesetComponent;
  let fixture: ComponentFixture<RolesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
