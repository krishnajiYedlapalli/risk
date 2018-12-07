import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkspaceButtonComponent } from './create-workspace-button.component';

describe('CreateWorkspaceButtonComponent', () => {
  let component: CreateWorkspaceButtonComponent;
  let fixture: ComponentFixture<CreateWorkspaceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkspaceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkspaceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
