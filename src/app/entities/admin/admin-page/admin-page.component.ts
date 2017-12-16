import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../shared/dialog/index';
import { LoaderService } from '../../../shared/services/loader.service';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { HTMLRenderComponent } from '../../../shared/data-table/data-table.component';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { AdminPageService } from './admin-page.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public listItem: any;
  closeResult: string;
  public pageSizeOptions = [{ 'key': '1', 'val': '10' }, { 'key': '2', 'val': '20' }, {
    'key': '3',
    'val': '30'
  }, { 'key': '4', 'val': '50' }, { 'key': '5', 'val': '100' }];
  adminSetting = {
    columns: {
      display_name: {
        title: 'display name',
        type: 'custom',
        renderComponent: HTMLRenderComponent,
      },
      description: {
        title: 'description'
      },
      address: {
        title: 'address'
      },
      city: {
        title: 'city'
      },
      phone_number: {
        title: 'phone number'
      },
      email: {
        title: 'email'
      },
      price_limit: {
        title: 'price limit'
      },
      time_open: {
        title: 'time open'
      },
      time_close: {
        title: 'time close'
      },
      action: {
        title: 'Action',
        type: 'custom',
        renderComponent: HTMLRenderComponent,
      }
    },
    actions: false,
    pager: {
      display: false,
      perPage: 30
    },
    noDataMessage: 'No Results'
  };
  id: number;
  private sub: any;

  constructor(
    private adminService: AdminPageService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private loadService: LoaderService,
    private dialog: DialogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.loadService.display(true);
    const token = this.localStorage.retrieve('authenticationToken');
    this.adminService.getAdminPage(token).subscribe((listItem) => {
      this.listItem = listItem;
      this.loadService.display(false);
    });
  }
  openPicture(url) {
    this.dialog.picture({ imageUrl: url });
  }

}
