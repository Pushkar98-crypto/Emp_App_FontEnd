import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  public empinfo:any=[]
  public apiEndpoint="https://localhost:44357/api/Emp";


  adminlogin(email: any, pass: any): any{
    if(email== "iamadmin" && pass== "admin@1234" )
    {
      localStorage.setItem('tokenForAdmin','allowed')
      return true
    }
    else{
      this.router.navigateByUrl('adminlogin')
      return false
    }


  }

  constructor( private router:Router, private http:HttpClient) { }
}
