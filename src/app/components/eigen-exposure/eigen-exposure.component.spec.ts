import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenExposureComponent } from './eigen-exposure.component';

describe('EigenExposureComponent', () => {
  let component: EigenExposureComponent;
  let fixture: ComponentFixture<EigenExposureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigenExposureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigenExposureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
