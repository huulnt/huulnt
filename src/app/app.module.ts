import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './layout/main/main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LayoutRoutingModule } from './layout/layout.module';
import { AdminModule } from './entities/admin/admin.module';
import { OrderModule } from './entities/order/order.module';
import { PlaceModule } from './entities/place/place.module';
import { ProductModule } from './entities/product/product.module';
import { LoginModule } from './entities/login/login.module';
import { Ng2Webstorage } from 'ngx-webstorage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityModule } from './entities/entity.module';
import { LoaderService } from './shared/services/loader.service';
import { ShareModule } from './shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
    EntityModule,
    ShareModule
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
