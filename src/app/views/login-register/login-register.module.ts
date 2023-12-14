import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { LoginRegisterComponent } from './login-register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormLoginComponent,
    FormRegisterComponent,
    LoginRegisterComponent,
  ],
  exports: [LoginRegisterComponent, FormLoginComponent, LoginRegisterComponent],
  imports: [CommonModule, LoginRegisterRoutingModule, ReactiveFormsModule],
})
export class LoginRegisterModule {}
