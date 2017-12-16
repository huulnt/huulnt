import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog.component';
import { JhiEventManager } from 'ng-jhipster';
import { Subscription } from 'rxjs/Rx';

@Injectable()
export class DialogService implements OnDestroy {
    errorListener: Subscription;
    constructor(
        private modalService: NgbModal,
        private eventManager: JhiEventManager) {
        this.errorListener = eventManager.subscribe('app.dialog', (data) => {
            const content = data.content;
            if (content && content.message) {
                this.open(content.type, content);
            }
        });
    }
    private open(type, params?: any) {
        /**
         * Only show dialog one time
         */
        const dialog = document.getElementsByClassName('alert-dialog');
        if (dialog.length > 0) {
            return;
        }

        const modalRef = this.modalService.open(DialogComponent, {
            windowClass: 'alert-dialog d-flex align-items-center justify-content-center'
                + (type === 'picture' ? ' fullscreen' : ''),
            backdrop: 'static'
        });
        modalRef.componentInstance.title = (params && params.title) ? params.title : '';
        modalRef.componentInstance.message = (params && params.message) ? params.message : '';
        modalRef.componentInstance.buttonLabel = (params && params.buttonLabel) ? params.buttonLabel : 'OK';
        modalRef.componentInstance.buttonCancelLabel = (params && params.buttonCancelLabel) ? params.buttonCancelLabel : 'Cancel';
        modalRef.componentInstance.imageUrl = (params && params.imageUrl) ? params.imageUrl : '';
        modalRef.componentInstance.placeholder = (params && params.placeholder) ? params.placeholder : '';
        modalRef.componentInstance.type = type;

        modalRef.componentInstance.changeRef.markForCheck();
        return Observable.create((observer: any) => {
            modalRef.result.then((res) => {
                observer.next(res);
                observer.complete();
            },
                (res) => {
                    observer.error(res);
                    observer.complete();
                });
        });
    }

    ngOnDestroy() {
        if (this.errorListener !== undefined && this.errorListener !== null) {
            this.eventManager.destroy(this.errorListener);
        }
    }

    // tslint:disable-next-line:member-ordering
    confirm = this.open.bind(this, 'confirm');
    // tslint:disable-next-line:member-ordering
    error = this.open.bind(this, 'error');
    // tslint:disable-next-line:member-ordering
    info = this.open.bind(this, 'info');
    // tslint:disable-next-line:member-ordering
    success = this.open.bind(this, 'success');
    // tslint:disable-next-line:member-ordering
    warning = this.open.bind(this, 'warning');
    // tslint:disable-next-line:member-ordering
    input = this.open.bind(this, 'input');
    // tslint:disable-next-line:member-ordering
    picture = this.open.bind(this, 'picture');
}
