import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MswMembersComponent } from './msw-members.component';

describe('MswMembersComponent', () => {
  let component: MswMembersComponent;
  let fixture: ComponentFixture<MswMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MswMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MswMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
