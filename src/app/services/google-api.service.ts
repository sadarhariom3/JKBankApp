import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
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
    this.oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout'
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if(!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow()
          // oAuthService.getIdToken();
           //this.abc = oAuthService.getAccessTokenExpiration();
          //console.log(this.abc)
        }else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            console.log( JSON.stringify(userProfile));
            this.userProfileSubject.next(userProfile as UserInfo)
            console.log("Hello");
            //console.log("Data: " + this.demo['info']);
            //this.abc2 = this.demo.info;
            //console.log(loaduserProfile);
            // this.abc = oAuthService.getIdToken();
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
    this.oAuthService.logOut()
   }
}
