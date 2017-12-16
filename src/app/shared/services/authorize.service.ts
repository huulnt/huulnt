import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorizeService {
    private profileURL = '/api/user/profile';
    private authorizedUser = null;
    observable: any;

    constructor(private http: Http,
        private localStorage: LocalStorageService,
        private sessionStorage: SessionStorageService) { }
    getUserInfo(): Observable<any>  {
        const token = this.localStorage.retrieve('authenticationToken');
        if (!token || token === null) {
            this.observable = this.http.get(environment.rootUrl + this.profileURL)
            .map((res: Response) => {
                this.authorizedUser = res.json().data;
            });
        }
        return this.authorizedUser;
    }
}
