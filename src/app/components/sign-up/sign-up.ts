import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Style, Avatar } from '@dicebear/core';
import definition from '@dicebear/styles/pixelbot.json';
import {NgClass} from '@angular/common';
import {futureDate, minAge, passwordNotMatch} from '../../utils/validators';
import {getItem, saveItem} from '../../utils/storage';

@Component({
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    NgClass
  ],
  selector: 'app-sign-up',
  styleUrl: './sign-up.css',
  templateUrl: './sign-up.html',
})
export class SignUp {

  signUpForm!: FormGroup;

  constructor(private router_outlet: RouterOutlet, private router: Router, private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', {
        validators: [
          Validators.required,
          minAge(),
          futureDate()
        ],
      }],
      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ],
        updateOn: 'blur'
      }],
      username: ['', Validators.required],
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
          Validators.pattern('^[a-zA-Z0-9]+$')
        ],
      }],
      confirmPassword: ['', {
        validators: [
          Validators.required,
          passwordNotMatch()
        ],
      }],
    })
  }

  onSubmit() {

    let style = new Style(definition);
    let avatar = new Avatar(style, {
      "tags": [
        "animation"
      ],
      "seed": Math.random().toString(36).substring(2, 15)
    });
    let user_avatar = avatar.toDataUri()

    let guid = crypto.randomUUID()

    if (this.signUpForm.valid) {

      const newUser = {
        guid: guid,
        first_name: this.signUpForm.value.firstName,
        last_name: this.signUpForm.value.lastName,
        birthday: this.signUpForm.value.birthday,
        email: this.signUpForm.value.email,
        address: this.signUpForm.value.address,
        username: this.signUpForm.value.username,
        password: this.signUpForm.value.password,
        avatar_img: user_avatar,
        role: 'usuario'
      }

      let usuarios = getItem('usuarios')
      usuarios.push(newUser)

      saveItem('usuarios', usuarios)

      this.router.navigate(['/sign-in'])

    }
  }
}
