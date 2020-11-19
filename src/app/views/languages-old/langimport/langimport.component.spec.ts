import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangimportComponent } from './langimport.component';

describe('LangimportComponent', () => {
  let component: LangimportComponent;
  let fixture: ComponentFixture<LangimportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangimportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
