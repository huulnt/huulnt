import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ORDER_ROUTE } from './order.route';
import { OrderComponent } from './order.component';
import { OrderDetailModule } from './order-detail/order-detail.module';

@NgModule({
    imports: [
        RouterModule.forRoot([ORDER_ROUTE], { useHash: true }),
        OrderDetailModule
    ],
    declarations: [
        OrderComponent
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderModule { }
