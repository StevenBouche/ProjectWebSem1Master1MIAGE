import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

//Module MDB
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot()
  ],
  bootstrap: [AuthComponent]
})

export class AuthModule { }
