import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeecomComponent } from './employeecom/employeecom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EmployeecomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
