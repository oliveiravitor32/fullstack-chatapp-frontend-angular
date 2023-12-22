import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginRegisterComponent } from './login-register.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  MatFormFieldModule,
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
    AuthFormComponent,
    SignInModalComponent,
    SignUpModalComponent,
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: formFieldOptions },
  ],
})
export class LoginRegisterModule {}
