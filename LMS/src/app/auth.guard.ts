import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate()
   {
   if( this.service.isuserloggedin()){
    return true;}
    this.router.navigate(['login'])
    return false
  }
  constructor(private service: UserService,private router:Router){}

}
