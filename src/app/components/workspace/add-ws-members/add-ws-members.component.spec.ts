import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWsMembersComponent } from './add-ws-members.component';

describe('AddWsMembersComponent', () => {
  let component: AddWsMembersComponent;
  let fixture: ComponentFixture<AddWsMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWsMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWsMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
