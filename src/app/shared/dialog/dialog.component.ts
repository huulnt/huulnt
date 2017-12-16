
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, AfterContentInit, ApplicationRef, ChangeDetectorRef} from '@angular/core';

@Component({
    templateUrl: './dialog.component.html'
})

export class DialogComponent implements AfterContentInit {
    @Input() title;
    @Input() message;
    @Input() type;
    @Input() buttonLabel;
    @Input() imageUrl;
    @Input() placeholder;
    titleColor: String;
    input: String;

    constructor(
        public activeModal: NgbActiveModal,
        public changeRef: ChangeDetectorRef
    ) {}

    ngAfterContentInit() {
        switch (this.type) {
            case 'confirm':
                this.title = this.title || 'Confirmation';
                this.titleColor = 'red';
                break;
            case 'error':
                this.title = this.title || 'Error';
                this.titleColor = 'red';
                break;
            case 'info':
                this.title = this.title || 'Info';
                this.titleColor = 'blue';
                break;
            case 'warning':
                this.title = this.title || 'Warning';
                this.titleColor = 'orange';
                break;
            case 'success':
                this.title = this.title || 'Successfully ! ';
                this.titleColor = 'green';
                break;
            case 'input':
                this.title = this.title || 'Please input';
                this.titleColor = 'gray';
                break;
        }
    }
}
