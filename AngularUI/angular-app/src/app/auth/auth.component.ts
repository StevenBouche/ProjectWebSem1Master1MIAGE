import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  validatingForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      modalFormLoginEmail: new FormControl('', Validators.email),
      modalFormLoginPassword: new FormControl('', Validators.required),
      modalFormRegisterEmail: new FormControl('', Validators.email),
      modalFormRegisterPassword: new FormControl('', Validators.required),
      modalFormRegisterRepeatPassword: new FormControl('', Validators.required)
    });
  }

}
