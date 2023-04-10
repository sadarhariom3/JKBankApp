import { Component, EventEmitter, Output } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToggled =new EventEmitter<boolean>()
  menuStatus:boolean=false;

  constructor(private googleApi:GoogleApiService) {

  }

  ngOnInit():void{
  }
  SideNavToggle(){
    this.menuStatus =!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  }

  logout() {
    this.googleApi.signOut();
  }
}