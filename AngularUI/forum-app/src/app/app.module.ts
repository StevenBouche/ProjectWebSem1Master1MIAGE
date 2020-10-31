
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Module MDB
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Routing and Component App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Forum module
import { ForumModule } from './forum/forum.module';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    ForumModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
