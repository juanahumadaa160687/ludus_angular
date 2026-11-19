import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordNotMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.root.get('password')?.value;
    const confirmPassword = control.root.get('confirmPassword')?.value;
    return password !== confirmPassword ? {passwordNotMatch: true} : null;
  }
}

export function futureDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = new Date(control.value);
    const today = new Date();
    return date > today ? {futureDate: true} : null;
  }
}

export function minAge(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    return age < 13 && age >= 0 ? {minAge: true} : null;
  }
}

