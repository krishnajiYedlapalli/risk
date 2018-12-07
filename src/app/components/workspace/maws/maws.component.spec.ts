import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAWSComponent } from './maws.component';

describe('MAWSComponent', () => {
  let component: MAWSComponent;
  let fixture: ComponentFixture<MAWSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAWSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
