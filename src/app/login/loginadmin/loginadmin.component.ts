import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../auth/authservice.service'
import {Router} from  '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  constructor(private authService: AuthserviceService, private router :Router) { }

  public email:any;
  public pass:any;
  ngOnInit(): void {
  }

   adminlogin()
   {
     if(this.authService.adminlogin(this.email,this.pass))
     {
       this.router.navigateByUrl('adminlogin/admin');
      
     }

   }

}
