import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/bindCallback';
@Injectable()
export class DetailAdminService {
    private urlPlace = '/api/place';
    private urlCreatedPlace = '/api/place/store';
    private urlUpdatePlace = '/api/place/update';
    private urlGetAllPlaces = '/api/category/place';
    constructor(private http: Http) { }
    getAllCategory(token) {
        return this.http.get(environment.rootUrl + this.urlGetAllPlaces + '?token=' + token).map((response: Response) => response.json().data);
    }
    getPlaces(id, token) {
        return this.http.get(environment.rootUrl + this.urlPlace
            + '/' + id + '?token=' + token).map((res: Response) =>
                res.json().data).catch((res: Response) => {
                    const data = res.json();
                    return Observable.throw(data);
                });
    }
    updatePlace(place) {
        return this.http.post(environment.rootUrl + this.urlUpdatePlace, place)
            .map((res: Response) => {
                if (res.status === 204) {
                    return res;
                } else {
                    return res.json().data;
                }
            }).catch((res: Response) => {
                const data = res.json();
                return Observable.throw(data);
            });
    }
    createdPlace(place) {
        return this.http.post(environment.rootUrl + this.urlCreatedPlace, place)
            .map((res: Response) => {
                return res.json().data;
            }).catch((res: Response) => {
                const data = res.json();
                return Observable.throw(data);
            });
    }
    updatePhoto(file) {
        return this.http.post(environment.rootUrl + this.urlUpdatePlace, file)
            .map((res: Response) => {
                if (res.status === 204) {
                    return res;
                } else {
                    return res.json().data;
                }
            }).catch((res: Response) => {
                const data = res.json();
                return Observable.throw(data);
            });
    }

}
