import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate  ()
  {

    if(localStorage.getItem('tokenForAdmin'))
    {
      return true
    }
    else if(localStorage.getItem('tokenForUser'))
    {
      return true
      if (localStorage.getItem('tokenForId'))
      {
        return true
      }

    }
  
    
   {
      this.router.navigateByUrl('login')
      return false
    }

  }
  
  
}
