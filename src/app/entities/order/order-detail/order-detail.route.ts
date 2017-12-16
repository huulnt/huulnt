import { Route } from '@angular/router';
import { OrderDetailComponent } from './order-detail.component';

export const DETAIL_ORDER_ROUTE: any = {
    path: 'detail-order',
    component: OrderDetailComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title',
        breadcrumb: 'Deatil Order'
    }
};
