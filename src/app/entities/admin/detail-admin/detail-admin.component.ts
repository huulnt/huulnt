import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { DetailAdminService } from './detail-admin.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { DialogService } from '../../../shared/dialog/index';
import * as $ from 'jquery';
@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.css'],
  providers: [DetailAdminService]
})
export class DetailAdminComponent implements OnInit {
  public action: any;
  public data: any = {};
  public category: any;
  id: string;
  dialog: DialogService;
  img: string;
  public token;
  changeData: Boolean = false;
  @ViewChild('fileInput') fileInput;
  constructor(
    private activeRouter: ActivatedRoute,
    private adminPageService: DetailAdminService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private loadService: LoaderService,
    dialog: DialogService,
    private router: Router
  ) {
    this.dialog = dialog;
  }
  fileUpdate() {
    const fileBrowser = this.fileInput.nativeElement;
    const id = this.id;
    const token = this.token;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('photo', fileBrowser.files[0]);
      formData.append('id', id);
      formData.append('token', token);
      this.adminPageService.updatePhoto(formData).subscribe((data) => {
        console.log(data);
      });
    }
  }
  ngOnInit() {
    this.token = this.localStorage.retrieve('authenticationToken');
    this.activeRouter.params.subscribe(params => {
      this.id = params.placeId;
    });
    this.action = this.activeRouter.snapshot.data['action'];
    if (this.action === 'edit' || this.action === 'view') {
      this.loadData();
    } else {
      this.getAllCategory();
    }
  }
  loadData() {
    this.loadService.display(true);
    const id = this.id;
    const token = this.token;
    this.data = this.adminPageService.getPlaces(id, token).subscribe((data) => {
      this.data = data;
      this.loadService.display(false);
      this.loadPhoto(id, token);
    }, error => {
      this.dialog.error({
        message: 'Cannot find places'
      });
      this.loadService.display(false);
      console.log(error);
      this.router.navigate(['/admin/admin-page']);
    }, () => console.log('Finished'));
  }
  loadPhoto(id, token) {
    const url = 'https://foodsyapp.herokuapp.com/api/place/photo/' + id + '?token=' + token;
    const d = new Date();
    $('#myimg').attr('src', this.img = url + '&time=' + d.getTime());
  }
  updatePlaces() {
    this.loadService.display(true);
    const token = this.token;
    this.data.token = token;
    delete (this.data.photo);
    const id = this.id;
    this.adminPageService.updatePlace(this.data).subscribe((data) => {
      if (data.status === 204) {
        this.loadService.display(false);
        this.dialog.info({
          message: data.statusText
        });
      } else {
        this.data = data;
        this.fileUpdate();
        this.loadService.display(false);
        this.loadData();
        this.dialog.info({
          message: 'Update data success!'
        });
      }
    });
  }
  createdPlaces() {
    this.loadService.display(true);
    const token = this.token;
    this.data.token = token;
    delete (this.data.photo);
    // this.data.category_id = 1;
    this.adminPageService.createdPlace(this.data).subscribe((data) => {
      if (data.status === 204) {
        this.loadService.display(false);
        this.dialog.info({
          message: data.statusText
        });
      } else {
        this.data = data;
        this.id = data.id;
        this.fileUpdate();
        this.loadService.display(false);
        this.loadData();
        this.dialog.info({
          message: 'Created data success!'
        });
        this.router.navigate(['/admin/edit/' + this.id]);
      }
    });
  }
  getAllCategory() {
    const token = this.token;
    this.adminPageService.getAllCategory(token).subscribe((data) => {
      this.category = data;
    });
  }
  updateData() {
    if (this.changeData === true) {
      this.updatePlaces();
    } else {
      this.fileUpdate();
      this.loadData();
    }
  }
}
