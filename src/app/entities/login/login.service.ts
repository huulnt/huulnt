import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/bindCallback';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {
    private urlLogin = '/api/auth/login';
    private urlProfile = '/api/user/profile';
    constructor(private http: Http) { }

    getLogin(user): Observable<any> {
        return this.http.post(environment.rootUrl + this.urlLogin, user).map((res: Response) => {
            const data = res.json().data;
            return data.token;
        }).catch((res: Response) => {
            const data = res.json();
            return Observable.throw(data);
        });
    }
    getUserData(token) {
        return this.http.get(environment.rootUrl + this.urlProfile + '?token=' + token).map((res: Response) => {
            const data = res.json().data;
            return data;
        }).catch((res: Response) => {
            const data = res.json();
            return Observable.throw(data);
        });
    }
}
