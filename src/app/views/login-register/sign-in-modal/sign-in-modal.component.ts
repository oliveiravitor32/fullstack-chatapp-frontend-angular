import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css'],
})
export class SignInModalComponent {
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
}
