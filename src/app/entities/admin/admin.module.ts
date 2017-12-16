import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ADMIN_ROUTE } from './admin.route';
import { AdminComponent } from './admin.component';

import { CanActiveLogin } from '../../shared/auth/canActiveLogin.service';
import { AuthorizeService } from '../../shared/services/authorize.service';
import { ShareModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DetailAdminComponent } from './detail-admin/detail-admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminPageModule } from './admin-page/admin-page.module';
import { AdminPageService } from './admin-page/admin-page.service';

@NgModule({
    imports: [
        RouterModule.forRoot([ADMIN_ROUTE], { useHash: true }),
        ShareModule,
        AdminPageModule
    ],
    declarations: [
        AdminComponent,
        DetailAdminComponent
    ],
    entryComponents: [],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
