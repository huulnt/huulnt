import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderDetailComponent } from './order-detail.component';
@NgModule({
    imports: [],
    declarations: [
        OrderDetailComponent
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderDetailModule { }
