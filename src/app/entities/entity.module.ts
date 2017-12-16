import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { EventModule } from './event/event.module';
import { LoginModule } from './login/login.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { PlaceModule } from './place/place.module';
import { JhiEventManager } from 'ng-jhipster';
import { ShareModule } from '../shared/shared.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */


@NgModule({
    imports: [
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
        AdminModule,
        EventModule,
        LoginModule,
        OrderModule,
        ProductModule,
        PlaceModule,
        ShareModule
    ],
    declarations: [],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntityModule { }
