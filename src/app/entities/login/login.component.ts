import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { LoaderService } from '../../shared/services/loader.service';
import { DialogService } from '../../shared/dialog/index';
import { window } from 'rxjs/operators/window';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dialog: DialogService;
  model: any = {};
  loading = false;
  returnUrl: string;
  public token = this.localStorage.retrieve('authenticationToken');
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private loadService: LoaderService,
    dialog: DialogService) {
    this.dialog = dialog;
  }

  ngOnInit() {
    const check = this.token;
    if (check || check === null || check === undefined) {
      this.router.navigate(['/admin']);
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
    if (!this.model.username) {
      this.dialog.error({
        message: 'Plaese enter username!'
      });
    } else if (!this.model.password) {
      this.dialog.error({
        message: 'Plaese enter username!'
      });
    } else {
      this.loadService.display(true);
      this.loginService.getLogin(this.model).subscribe((data) => {
        this.localStorage.store('authenticationToken', data);
        this.router.navigate([this.returnUrl]);
        this.loadService.display(false);
        this.getUserdata();
      }, error => {
        this.dialog.error({
          message: error.errors
        });
        this.loadService.display(false);
        console.log(error);
      }, () => console.log('Finished'));
    }
  }
  getUserdata() {
    this.token = this.localStorage.retrieve('authenticationToken');
    this.loginService.getUserData(this.token).subscribe((data) => {
      this.localStorage.store('currentUser', data);
      location.reload();
    });
  }

}
