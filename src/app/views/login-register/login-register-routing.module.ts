import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRegisterComponent } from './login-register.component';
import { loginGuard } from 'src/app/guards/login.guard';

const routes: Routes = [
  { path: '', component: LoginRegisterComponent, canActivate: [loginGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class LoginRegisterRoutingModule {}
