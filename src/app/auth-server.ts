import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServer implements CanActivate {
  constructor(private router: Router,
    private api:ApiService) {}

  canActivate(
  ){
    return this.api.account().getSession('current').then(
        (res)=>{
            return true
        },
        (err)=>{
            this.router.navigate(['/auth/login'])
            return false
        },
    )

//     console.log("canactive  called ...")
//    const pro= this.api.account().getSession('current')
//    let isAuthenticated=false
//    pro.then((res)=>{
//     console.log("res",res)
//     isAuthenticated=true
//    },(err)=>{
//     console.log("Error ",err)
//    })
//     // const isAuthenticated = /* Check if the user is authenticated */ true;
//     // // this.api.account().getSession("current")
//     // if (isAuthenticated) {
//     //   return true; // Allow navigation
//     // } else {
//     //   // Redirect to the login page or another route
//     //   return this.router.createUrlTree(['/auth/login']);
//     // }
//     if(isAuthenticated==false){
//         return this.router.createUrlTree(['/auth/login']);
//     }
//     return isAuthenticated
  }
}
