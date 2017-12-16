import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTE } from './login.route';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
@NgModule({
    imports: [
        FormsModule,
        RouterModule.forRoot([LOGIN_ROUTE], { useHash: true }),
        NgbModule.forRoot(),
    ],
    declarations: [
        LoginComponent
    ],
    entryComponents: [],
    providers: [
        LoginService,
        JhiEventManager
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
