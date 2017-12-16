import { Route } from '@angular/router';
import { ProductComponent } from './product.component';

export const PRODUCT_ROUTE: Route = {
    path: 'product',
    component: ProductComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title',
        breadcrumb: 'Place page'
    }
};
