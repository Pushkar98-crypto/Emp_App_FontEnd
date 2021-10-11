import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecomComponent } from './employeecom.component';

describe('EmployeecomComponent', () => {
  let component: EmployeecomComponent;
  let fixture: ComponentFixture<EmployeecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
