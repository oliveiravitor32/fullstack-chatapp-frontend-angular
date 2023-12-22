import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: [
    './login-register.component.css',
    './login-register.responsive.component.css',
  ],
})
export class LoginRegisterComponent {
  constructor(private dialog: MatDialog) {}

  openSignUpModal(): void {
    this.dialog.open(SignUpModalComponent, {
      width: '600px',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'custom-dialog',
      backdropClass: 'modalStyleBackdrop',
      disableClose: true,
      autoFocus: false,
    });
  }

  openSignInModal(): void {
    this.dialog.open(SignInModalComponent, {
      width: '600px',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'modalStyle',
      backdropClass: 'modalStyleBackdrop',
      disableClose: true,
      autoFocus: false,
    });
  }
}
