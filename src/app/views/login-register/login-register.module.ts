import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginRegisterComponent } from './login-register.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { HttpClientModule } from '@angular/common/http';

import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';

const formFieldOptions: MatFormFieldDefaultOptions = {
  appearance: 'outline',
  hideRequiredMarker: false,
};

@NgModule({
  declarations: [
    LoginRegisterComponent,
    SignInModalComponent,
    SignUpModalComponent,
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: formFieldOptions },
  ],
})
export class LoginRegisterModule {}
