import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInToHome = ()=> redirectLoggedInTo(['/']);


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path:'registro',
    component: SignupComponent,
    ...canActivate(redirectLoggedInToHome),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
