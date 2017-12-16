import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DETAIL_ADMIN_ROUTE } from './detail-admin/detail-admin.route';
import { CanActiveLogin } from '../../shared/auth/canActiveLogin.service';
import { ADMIN_PAGE_ROUTE } from './admin-page/admin-page.route';

export const ADMIN_ROUTE: Route = {
    path: 'admin',
    component: AdminComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    },
    canActivate: [CanActiveLogin],
    children: [
        ...DETAIL_ADMIN_ROUTE,
        ADMIN_PAGE_ROUTE
    ]
};
