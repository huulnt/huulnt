import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { ADMIN_PAGE_ROUTE } from './admin-page.route';
import { ShareModule } from '../../../shared/shared.module';
import { AdminPageService } from './admin-page.service';

@NgModule({
    imports: [
        ShareModule
    ],
    declarations: [
        AdminPageComponent
    ],
    entryComponents: [],
    providers: [
        AdminPageService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPageModule { }
