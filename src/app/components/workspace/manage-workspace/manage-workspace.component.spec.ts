import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkspaceComponent } from './manage-workspace.component';

describe('ManageWorkspaceComponent', () => {
  let component: ManageWorkspaceComponent;
  let fixture: ComponentFixture<ManageWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
