import { Route } from '@angular/router';
import { EventComponent } from './event.component';

export const EVENT_ROUTE: Route = {
    path: 'event',
    component: EventComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title',
        breadcrumb: 'Deatil Admin'
    }
};
