import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { ServersComponent } from './servers/servers.component';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [
    
    AppComponent,
    
    OtpComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
