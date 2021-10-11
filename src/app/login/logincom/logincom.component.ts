import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-logincom',
  templateUrl: './logincom.component.html',
  styleUrls: ['./logincom.component.css']
})
export class LogincomComponent implements OnInit {

  constructor( private router:Router) {}

  ngOnInit(): void {


  }

  user()
  {
    console.log("this came from login"); 
    this.router.navigateByUrl('userlogin')

  }
  admin()
{
  console.log("this is from login to admin");
  this.router.navigateByUrl('adminlogin');
}
  
}
