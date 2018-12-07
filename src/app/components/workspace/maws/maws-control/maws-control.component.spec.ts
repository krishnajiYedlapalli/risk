import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsControlComponent } from './maws-control.component';

describe('MawsControlComponent', () => {
  let component: MawsControlComponent;
  let fixture: ComponentFixture<MawsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
