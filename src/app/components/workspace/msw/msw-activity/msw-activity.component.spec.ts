import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSWActivityComponent } from './msw-activity.component';

describe('MSWActivityComponent', () => {
  let component: MSWActivityComponent;
  let fixture: ComponentFixture<MSWActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSWActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSWActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
