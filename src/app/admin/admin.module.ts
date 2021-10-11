import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincomComponent } from './admincom/admincom.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmpdisplayComponent } from './empdisplay/empdisplay.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdmincomComponent,
    EmpdisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
