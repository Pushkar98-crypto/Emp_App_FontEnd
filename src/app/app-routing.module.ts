import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogincomComponent} from './login/logincom/logincom.component';
import {EmployeecomComponent} from './employee/employeecom/employeecom.component';
import {AdmincomComponent} from'./admin/admincom/admincom.component';
import {LoginadminComponent} from './login/loginadmin/loginadmin.component';
import {AuthguardGuard } from './guards/authguard.guard'
import {EmpdisplayComponent} from './admin/empdisplay/empdisplay.component';


const routes: Routes = [

{
  path:'login',component:LogincomComponent
},
{
  path:'',component:LogincomComponent
},

{
  path:'adminlogin/admin' ,component:AdmincomComponent,canActivate:[AuthguardGuard]
},
{
  path:'userlogin/emp/:id',component:EmployeecomComponent,canActivate:[AuthguardGuard]
},
{
  path:'adminlogin',component:LoginadminComponent
},
{
  path:'adminlogin/admin/empdis/:id',component:EmpdisplayComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
