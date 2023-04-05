import { Component } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  userinfo:any;

  constructor(private readonly googleApi : GoogleApiService) {

  }

  login() {
    this.googleApi.login();
    // this.googleApi.userProfileSubject.subscribe(info => {
    // this.userinfo = info;
//  })
}


}
