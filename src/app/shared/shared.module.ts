import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgJhipsterModule } from 'ng-jhipster';
import { ShareLibModule } from './shared-lib.module';
import { ShareCommonModule } from './shared-common.module';

@NgModule({
    imports: [
       ShareLibModule,
       ShareCommonModule
    ],
    declarations: [
    ],
    entryComponents: [
    ],
    providers: [
    ],
    exports: [
        ShareCommonModule
    ]
})
export class ShareModule { }
