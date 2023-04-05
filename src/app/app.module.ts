import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './appPipes/filter.pipe';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { EditBranchComponent } from './components/edit-branch/edit-branch.component';
import { BranchManagerComponent } from './components/branch-manager/branch-manager.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewBranchComponent } from './components/view-branch/view-branch.component';
import { BranchComponent } from './branch/branch.component';
import { LoginComponent } from './login/login.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    TransactionComponent,
    FilterPipe,
    AddBranchComponent,
    EditBranchComponent,
    BranchManagerComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ViewBranchComponent,
    BranchComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
