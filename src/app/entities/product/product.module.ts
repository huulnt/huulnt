import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PRODUCT_ROUTE } from './product.route';
import { ProductComponent } from './product.component';
@NgModule({
    imports: [
        RouterModule.forRoot([ PRODUCT_ROUTE ], { useHash: true })
    ],
    declarations: [
        ProductComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule {}
