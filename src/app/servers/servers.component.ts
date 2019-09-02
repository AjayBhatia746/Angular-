import { WindowService } from './../window.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  
})
export class Phonenumber{
country:string;
area:string;
prefix:string;
line:string;

get e164(){
  const num=this.country+this.area+this.prefix+this.line
  return `+${num}`
}
}
export class ServersComponent implements OnInit {
  
  windowRef:any;
  phoneNumber=new Phonenumber
  verificationCode:string;
  user:any;
  constructor(private win:WindowService){}
  ngOnInit() {
    this.windowRef=this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render()
  }
  sendLoginCode(){
    var phoneNumber = this.phoneNumber.e164;
var appVerifier = this.windowRef.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      this.windowRef.confirmationResult = confirmationResult;
    }).catch(function (error) {
      console.log(error)
    });
  }

  verifylogincode(){
    
this.windowRef.confirmationResult.confirm(this.verificationCode).then(function (result) {
 // User signed in successfully.
  this.user = result.user;
  // ...
}).catch(function (error) {
 console.log({error:error})
});
  }
  }


