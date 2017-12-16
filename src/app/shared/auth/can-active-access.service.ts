import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthorizeService } from '../services/authorize.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CanActiveAccessService implements CanActivate {
    observable: any;
    constructor(private router: Router,
        private authorizeService: AuthorizeService) { }

    canActivate(route: ActivatedRouteSnapshot) {
        return this.checkLogin(route);
    }
    checkLogin(active) {
        return this.authorizeService.getUserInfo().map((data) => {
            if (data.role) {
                return true;
            } else {
                return false;
            }
        });
    }
}
