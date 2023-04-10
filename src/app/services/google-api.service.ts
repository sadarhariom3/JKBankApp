import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: 'http://localhost:4200/dash',
  //clientId: '940983624965-psjjjgoothue4g5cpcev5mrk35q1k3ce.apps.googleusercontent.com',
  clientId: '449864239430-bqcm4gd2ja7bmlopkkpqeg6nr97o8cjd.apps.googleusercontent.com',
  scope: 'openid profile email'
}


export interface UserInfo {
  info: {
    sub: string,     //Identifier for the user
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {


  userProfileSubject = new Subject<UserInfo>()

  demo:any;
  abc:any;
  authorized:any;
  abc2:any;

  constructor(private readonly oAuthService: OAuthService) {
   }

   login() {
    this.oAuthService.configure(oAuthConfig)
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if(!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow()
          this.abc = this.oAuthService.getIdToken();
          console.log(this.abc);
          // oAuthService.getIdToken();
           //this.abc = oAuthService.getAccessTokenExpiration();
          //console.log(this.abc)
        }else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            console.log( JSON.stringify(userProfile));
            this.userProfileSubject.next(userProfile as UserInfo)
            
            //console.log("Data: " + this.demo['info']);
            //this.abc2 = this.demo.info;
            //console.log(loaduserProfile);
             this.abc = this.oAuthService.getIdToken();
             console.log(this.abc);
            // this.authorized = this.login.login(this.abc).subscribe(response => {
            // this.authorized = response;
            
          // })
            //console.log(this.abc);
          })
        }
      })
    })

   }

   isLoggedIn():boolean {
    return this.oAuthService.hasValidAccessToken()
   }

   signOut() {
    debugger
    this.oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
    this.oAuthService.revokeTokenAndLogout()
   }
}
