import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSWComponent } from './msw.component';

describe('MSWComponent', () => {
  let component: MSWComponent;
  let fixture: ComponentFixture<MSWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
