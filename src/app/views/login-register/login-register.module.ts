import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginRegisterComponent } from './login-register.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginRegisterComponent, AuthFormComponent],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
})
export class LoginRegisterModule {}
