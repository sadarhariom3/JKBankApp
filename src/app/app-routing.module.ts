import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { BranchManagerComponent } from './components/branch-manager/branch-manager.component';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { EditBranchComponent } from './components/edit-branch/edit-branch.component';
import { ViewBranchComponent } from './components/view-branch/view-branch.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BranchComponent } from './branch/branch.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
   {path:'dash',component: DashboardComponent},
  // {path:'customer',component: CustomerComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   {path:'branch',component: BranchComponent },
  {path:'transaction',component: TransactionComponent },
   {path:'login',component: LoginComponent},
  { path: 'branch/admin', component: BranchManagerComponent },
  { path: 'branch/add', component: AddBranchComponent },
  { path: 'branch/edit/:branchId', component: EditBranchComponent },
  { path: 'branch/view/:branchId', component: ViewBranchComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
