import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ModalChangePasswordComponent } from '../shared/modal-change-password/modal-change-password.component';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styles: []
})
export class PosComponent implements OnInit {

  @ViewChild('mdlChangePassword', { static: true }) private mdlChangePassword: ModalChangePasswordComponent;
  firstName: any;
  lastName: any;

  constructor(private router: Router) { }

  ngOnInit() {

    $(function () {
      'use strict';

      $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
      })
    });

    this.firstName = sessionStorage.getItem('firstName');
    this.lastName = sessionStorage.getItem('lastName');

  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('lastName');

    this.router.navigateByUrl('/login');
  }

  openChangePassword() {
    this.mdlChangePassword.open();
  }

  onChangePassword(event: any) {
    console.log(event);
  }
}
