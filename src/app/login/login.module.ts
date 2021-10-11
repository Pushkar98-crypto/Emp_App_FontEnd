import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomComponent } from './logincom/logincom.component';
import { FormsModule } from '@angular/forms';
import { LoginadminComponent } from './loginadmin/loginadmin.component';



@NgModule({
  declarations: [
    LogincomComponent,
    LoginadminComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
