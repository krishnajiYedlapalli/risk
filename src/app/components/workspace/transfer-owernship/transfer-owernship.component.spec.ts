import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOwernshipComponent } from './transfer-owernship.component';

describe('TransferOwernshipComponent', () => {
  let component: TransferOwernshipComponent;
  let fixture: ComponentFixture<TransferOwernshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferOwernshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferOwernshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
