import { Route } from '@angular/router';

import { NavbarComponent } from './layout/navbar/navbar.component';

export const navbarRoute: Route = {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar',
    canActivate: []
};

