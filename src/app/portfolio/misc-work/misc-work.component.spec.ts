import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscWorkComponent } from './misc-work.component';

describe('MiscWorkComponent', () => {
  let component: MiscWorkComponent;
  let fixture: ComponentFixture<MiscWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
