import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminGuardService } from './admin-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AdminGuardService]
})
export class AuthModule { }
