import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router : Router) {}
  canActivate(){
    if(localStorage.getItem('LogIn') != "true"){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  
}
