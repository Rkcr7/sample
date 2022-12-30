import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsadminGuard implements CanActivate {
  roles: any;

  constructor(private _authservice:AuthService,private storageService:StorageService,private router:Router)  { }





  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


        this.roles = this.storageService.getUser().roles;
        if(this.roles.includes("ROLE_ADMIN")||this.roles.includes("ROLE_HR")){
          return true
        }


      return this.router.createUrlTree([''])
    }
  }


