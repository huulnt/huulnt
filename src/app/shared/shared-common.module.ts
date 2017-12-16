import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShareLibModule } from './shared-lib.module';
import { DialogService } from './dialog/index';
import { DialogComponent } from './dialog/dialog.component';
import { CanActiveLogin } from './auth/canActiveLogin.service';
import { CanActiveAccessService } from './auth/can-active-access.service';
import { AuthorizeService } from './services/authorize.service';
import { DataTableComponent, HTMLRenderComponent } from './data-table/data-table.component';


@NgModule({
    imports: [
        ShareLibModule
    ],
    declarations: [
        DialogComponent,
        DataTableComponent,
        HTMLRenderComponent
    ],
    entryComponents: [
        DialogComponent,
        HTMLRenderComponent
    ],
    providers: [
        DialogService,
        CanActiveLogin,
        CanActiveAccessService,
        AuthorizeService
    ],
    exports: [
        ShareLibModule,
        DataTableComponent
    ]
})
export class ShareCommonModule { }
