import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch:'full' },

  { path: 'login-signup', component: LoginSignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
