import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdisplayComponent } from './empdisplay.component';

describe('EmpdisplayComponent', () => {
  let component: EmpdisplayComponent;
  let fixture: ComponentFixture<EmpdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
