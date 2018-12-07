import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteViaMailComponent } from './invite-via-mail.component';

describe('InviteViaMailComponent', () => {
  let component: InviteViaMailComponent;
  let fixture: ComponentFixture<InviteViaMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteViaMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteViaMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
