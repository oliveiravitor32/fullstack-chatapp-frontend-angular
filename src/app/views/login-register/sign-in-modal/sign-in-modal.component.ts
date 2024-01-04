import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/authUser';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css'],
})
export class SignInModalComponent implements OnInit {
  signInForm = new FormGroup({
    nickname: new FormControl('', [
      Validators.pattern('[a-zA-Z0-9]+$'),
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.pattern('[a-zA-Z0-9]+$'),
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  loginFailed: boolean = false;
  load: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SignInModalComponent>,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginFailed = false;
  }

  onSubmit() {
    this.load = true;
    const body: AuthUser = {
      nickname: this.signInForm.value.nickname,
      password: this.signInForm.value.password,
    };

    this.authService.login(body).subscribe({
      next: () => {
        this.dialogRef.close();
        this.router.navigate(['/chatrooms']);
        this.load = false;
      },
      error: () => {
        this.loginFailed = true;
        this.load = false;
      },
    });

    this.signInForm.reset();
  }
}
