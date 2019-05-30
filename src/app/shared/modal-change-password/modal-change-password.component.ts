import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AlertService } from '../alert.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styles: []
})
export class ModalChangePasswordComponent implements OnInit {
  @Output('onChanged') private onChanged: EventEmitter<any> = new EventEmitter();

  @ViewChild('content', { static: true }) private content: Element;

  oldPassword: any;
  newPassword: any;

  constructor(
    private modalService: NgbModal,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  open() {
    this.oldPassword = null;
    this.newPassword = null;

    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' })
      .result.then((result) => {
      }, (reason) => {
        // this.onSave.emit(false);
      });
  }

  async doChange() {

    if (this.oldPassword && this.newPassword) {
      try {
        this.onChanged.emit(true);
        this.alertService.success();
        this.modalService.dismissAll();
      } catch (e) {
        this.alertService.error(e.message);
      }
    } else {
      this.alertService.error('กรุณาระบุข้อมูลให้ครบ');
    }

  }

}
