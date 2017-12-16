import { Route } from '@angular/router';
import { DetailAdminComponent } from './detail-admin.component';

export const DETAIL_ADMIN_ROUTE = [
    {
        path: 'view/:placeId',
        component: DetailAdminComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title',
            breadcrumb: 'Deatil Admin',
            action: 'view'
        }
    },
    {
        path: 'edit/:placeId',
        component: DetailAdminComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title',
            breadcrumb: 'Deatil Admin',
            action: 'edit'
        }
    },
    {
        path: 'created',
        component: DetailAdminComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title',
            breadcrumb: 'Deatil Admin',
            action: 'created'
        }
    }
];



