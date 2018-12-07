import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MswShareObjectPopupComponent } from './msw-share-object-popup.component';

describe('MswShareObjectPopupComponent', () => {
  let component: MswShareObjectPopupComponent;
  let fixture: ComponentFixture<MswShareObjectPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MswShareObjectPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MswShareObjectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
