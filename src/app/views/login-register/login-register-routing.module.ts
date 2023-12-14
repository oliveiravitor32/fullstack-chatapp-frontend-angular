import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'register', component: FormRegisterComponent },
  { path: 'login', component: FormLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class LoginRegisterRoutingModule {}
