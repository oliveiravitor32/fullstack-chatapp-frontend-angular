import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from 'src/app/models/registerUser';
import { AuthService } from 'src/app/service/auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userAlreadyExists = false;
    this.successfulSignUp = false;
  }

  onSubmit() {
    const body: RegisterUser = {
      nickname: this.signUpForm.value.nickname,
      password: this.signUpForm.value.password,
    };
    this.authService.register(body).subscribe(
      () => {
        this.successfulSignUp = true;
      },
      () => {
        this.userAlreadyExists = true;
      }
    );
    this.signUpForm.reset();
  }
}
