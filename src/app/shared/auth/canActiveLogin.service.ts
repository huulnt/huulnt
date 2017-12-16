import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthorizeService } from '../services/authorize.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
@Injectable()
export class CanActiveLogin implements CanActivate {
    constructor(private router: Router,
        private authorizeService: AuthorizeService,
        private localStorage: LocalStorageService,
        private sessionStorage: SessionStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.localStorage.retrieve('authenticationToken');
        if (!token || token === null || token === undefined) {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        } else {
            return true;
        }
    }
}
