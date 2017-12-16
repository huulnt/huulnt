import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoaderService } from '../../shared/services/loader.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showLoader: boolean;
  public user: any;
  constructor(
    private loaderService: LoaderService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
  ) { }

  ngOnInit() {
    this.load();
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    this.loadLocalData();
  }
  load() {
    $('#sidebarCollapse').toggleClass('active');
    $('#sidebar').toggleClass('active');
  }
  onClick() {
    $('#sidebar').toggleClass('active');
    $('#sidebarCollapse').toggleClass('active');
  }

  loadLocalData() {
    this.user = this.localStorage.retrieve('currentUser');
  }
}
