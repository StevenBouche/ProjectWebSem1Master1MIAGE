import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

//Module MDB
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  bootstrap: [AuthComponent]
})

export class AuthModule { }
