import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MswSettingsComponent } from './msw-settings.component';

describe('MswSettingsComponent', () => {
  let component: MswSettingsComponent;
  let fixture: ComponentFixture<MswSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MswSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MswSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
