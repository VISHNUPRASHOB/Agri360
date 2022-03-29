import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgroinvestComponent } from './agroinvest/agroinvest.component';
import {LoandetailComponent } from './loandetail/loandetail.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from '@progress/kendo-angular-dateinputs';

const routes: Routes = [
  { path: 'login-component', component: LoginComponent,canActivate:[LoginGuard] },
  { path: 'register-component', component: RegisterComponent },
  { path: 'agroinvest-component', component: AgroinvestComponent,canActivate:[AuthGuard] },
  { path: 'loan-component', component: LoandetailComponent,canActivate:[AuthGuard]},
  { path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'nav-component', component: NavigationComponent }


 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
