import { Component } from '@angular/core';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent {

  userinfo:any;

  constructor(private readonly googleApi : GoogleApiService) {
    debugger
    this.googleApi.login();
    this.googleApi.userProfileSubject.subscribe(info => {
    this.userinfo = info;
 })

  }

}
