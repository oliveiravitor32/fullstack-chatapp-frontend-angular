import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AuthUser } from 'src/app/models/authUser';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css'],
})
export class SignUpModalComponent implements OnInit {
  signUpForm = new FormGroup({
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

  userAlreadyExists: boolean = false;
  successfulSignUp: boolean = false;

  load: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userAlreadyExists = false;
    this.successfulSignUp = false;
  }

  onSubmit() {
    this.load = true;
    const body: AuthUser = {
      nickname: this.signUpForm.value.nickname,
      password: this.signUpForm.value.password,
    };
    this.authService.register(body).subscribe({
      next: () => {
        this.successfulSignUp = true;
        this.load = false;
      },
      error: () => {
        this.userAlreadyExists = true;
        this.load = false;
      },
    });
    this.signUpForm.reset();
  }
}
