import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSWObjectComponent } from './msw-objects.component';

describe('MSWObjectComponent', () => {
  let component: MSWObjectComponent;
  let fixture: ComponentFixture<MSWObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSWObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSWObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
