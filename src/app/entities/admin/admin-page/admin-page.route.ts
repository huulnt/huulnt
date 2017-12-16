import { Route } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';

export const ADMIN_PAGE_ROUTE: any = {
    path: 'admin-page',
    component: AdminPageComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title',
        breadcrumb: 'My Record'
    }
};
