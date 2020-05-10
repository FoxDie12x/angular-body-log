import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/public/login/login.component';
import {RegisterComponent} from './pages/public/register/register.component';
import {HomeComponent} from './pages/public/home/home.component';


const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
