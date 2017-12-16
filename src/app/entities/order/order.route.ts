import { Route } from '@angular/router';
import { OrderComponent } from './order.component';
import { DETAIL_ORDER_ROUTE } from './order-detail/order-detail.route';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CanActiveAccessService } from '../../shared/auth/can-active-access.service';

export const ORDER_ROUTE: Route = {
    path: 'order',
    component: OrderComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    },
    children: [
        DETAIL_ORDER_ROUTE
    ],
    canActivate: [CanActiveAccessService]
};
