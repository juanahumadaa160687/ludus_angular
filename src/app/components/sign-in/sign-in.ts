import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {getItem, saveSessionStorage} from '../../utils/storage';

@Component({
  imports: [
    RouterOutlet,
    ReactiveFormsModule
  ],
  selector: 'app-sign-in',
  styleUrl: './sign-in.css',
  templateUrl: './sign-in.html',
})
export class SignIn {

  signInForm!: FormGroup;

  constructor(private routerOutlet: RouterOutlet, private formBuilder: FormBuilder, private router: Router) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {

    if (this.signInForm.valid) {

      let usuarios = getItem('usuarios');

      let usuario = usuarios.find((user: any) => user.email === this.signInForm.value.email);

      if (usuario && usuario.password === this.signInForm.value.password) {
        saveSessionStorage('usuario', usuario)
        this.router.navigate(['/tienda']);
      } else{

      }
    }
  }
}
