import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { environment } from '../../../../environments/environment';
import { AdminPageModels } from './admin-page.model';
import 'rxjs/add/observable/bindCallback';
@Injectable()
export class AdminPageService {
    private urlLogin = '/api/place';
    constructor(private http: Http) { }
    list: any;
    getAdminPage(token) {
        return this.http.get(environment.rootUrl + this.urlLogin + '?token=' + token).map((res: Response) => {
            const data = res.json().data;
            this.list = new AdminPageModels(data, token);
            return this.list.getData();
        });
    }
}
