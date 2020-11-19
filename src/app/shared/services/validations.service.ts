import { Injectable } from '@angular/core';
import { Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }
  /*===========Validations Expression Start here ===========*/
  notRequired_validator = [];
  onlyRequired_validator = [Validators.required];
  email_validator = [Validators.required, Validators.minLength(6), Validators.maxLength(150),
    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,25}$')];
  password_validator = [Validators.required, Validators.minLength(8), Validators.maxLength(20),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{8,15}$')];
  /*===========Validations Expression End here ===========*/
}
