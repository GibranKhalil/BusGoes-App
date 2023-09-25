import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ApiService } from './shared/autenticador.service';

@Injectable({
    providedIn: 'root'
})

export class AuthguardGuard{
    constructor(private dataService: ApiService, private router: Router) { }

    isLogin(routeurl: string) {
        if (this.dataService.isLoggedIn()) {
            return true;
        }

        this.dataService.redirectUrl = routeurl;
        this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl } });
    }
}