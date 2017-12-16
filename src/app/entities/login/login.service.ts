import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/bindCallback';
import { environment } from '../../../environments/environment';
@Injectable()
export class LoginService {
    private urlLogin = '/api/auth/login';
    private urlProfile = '/api/user/profile';
    constructor(private http: Http) { }
    private getHeaders(): RequestOptions {
        let reqOp = new RequestOptions();
    
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'https://foodsyapp.herokuapp.com');
        headers.append('Access-Control-Allow-Headers', '*');
    
        reqOp.headers = headers;
    
        return reqOp;
      }
    getLogin(user): Observable<any> {
        return this.http.post(environment.rootUrl + this.urlLogin, user, this.getHeaders()).map((res: Response) => {
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
