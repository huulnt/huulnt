import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EVENT_ROUTE } from './event.route';
import { EventComponent } from './event.component';

@NgModule({
    imports: [
        RouterModule.forRoot([EVENT_ROUTE], { useHash: true }),
    ],
    declarations: [
        EventComponent
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventModule { }
