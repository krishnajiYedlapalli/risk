import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MswMakeCopyPopupComponent } from './msw-make-copy-popup.component';

describe('MswMakeCopyPopupComponent', () => {
  let component: MswMakeCopyPopupComponent;
  let fixture: ComponentFixture<MswMakeCopyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MswMakeCopyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MswMakeCopyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
