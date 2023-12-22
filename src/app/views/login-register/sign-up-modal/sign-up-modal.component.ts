import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css'],
})
export class SignUpModalComponent {
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
}
