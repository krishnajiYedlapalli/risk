import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MswObjectHandlePopupComponent } from './msw-object-handle-popup.component';

describe('MswObjectHandlePopupComponent', () => {
  let component: MswObjectHandlePopupComponent;
  let fixture: ComponentFixture<MswObjectHandlePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MswObjectHandlePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MswObjectHandlePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
