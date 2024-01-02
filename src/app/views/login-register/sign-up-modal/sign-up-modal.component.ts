import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from 'src/app/models/registerUser';
import { AuthService } from 'src/app/service/auth.service';

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

  constructor(private authService: AuthService) {}

  onSubmit() {
    const body: RegisterUser = {
      nickname: this.signUpForm.value.nickname,
      password: this.signUpForm.value.password,
    };
    this.authService.register(body).subscribe(
      (response) => {
        console.log('Sucesso na requisição:', response);
      },
      (error) => {
        console.error('Erro na requisição:', error);
      }
    );
  }
}
