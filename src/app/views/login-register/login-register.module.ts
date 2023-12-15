import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { LoginRegisterComponent } from './login-register.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';

@NgModule({
  declarations: [
    FormLoginComponent,
    FormRegisterComponent,
    LoginRegisterComponent,
    AuthFormComponent,
  ],
  exports: [LoginRegisterComponent, FormLoginComponent, LoginRegisterComponent],
  imports: [CommonModule, LoginRegisterRoutingModule, SharedMaterialModule],
})
export class LoginRegisterModule {}
