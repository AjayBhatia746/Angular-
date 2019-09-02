//import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { WindowService } from './../window.service';
import * as firebase from 'firebase'
import { environment } from '../../environments/environment.prod';
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
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  windowRef:any;
  phoneNumber=new Phonenumber
  verificationCode:string;
  user:any;
  constructor(private win:WindowService){}
  ngOnInit() {
    firebase.initializeApp(environment.firebase);
    this.windowRef=this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render()
  }
  sendLoginCode(){
    var phoneNumber = this.phoneNumber.e164;
    console.log(phoneNumber)
var appVerifier = this.windowRef.recaptchaVerifier;
console.log("otp")
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log("otp Sent")
      this.windowRef.confirmationResult = confirmationResult;
    }).catch(function (error) {
      console.log("Error not SENT")
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
