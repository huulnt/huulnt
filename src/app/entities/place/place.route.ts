import { Route } from '@angular/router';
import { PlaceComponent } from './place.component';

export const PLACE_ROUTE: Route = {
    path: 'place',
    component: PlaceComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title',
        breadcrumb: 'Place page'
    }
};
