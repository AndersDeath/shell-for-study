import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router:Router) {}

    canActivate(activatedRouter: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        if(!localStorage.getItem('isLogin')) {
          this.router.navigate([''])
          return false
        } else {
          return true;
        }
    }
}
