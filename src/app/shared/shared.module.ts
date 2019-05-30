import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert.service';
import { ModalChangePasswordComponent } from './modal-change-password/modal-change-password.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalChangePasswordComponent
  ],
  providers: [
    AlertService
  ]
})
export class SharedModule { }
