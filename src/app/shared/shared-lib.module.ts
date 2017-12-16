import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgJhipsterModule } from 'ng-jhipster';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        Ng2SmartTableModule
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        NgbModule,
        Ng2SmartTableModule
    ]
})
export class ShareLibModule { }
