import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PLACE_ROUTE } from './place.route';
import { PlaceComponent } from './place.component';
@NgModule({
    imports: [
        RouterModule.forRoot([ PLACE_ROUTE ], { useHash: true })
    ],
    declarations: [
        PlaceComponent
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlaceModule { }
