import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/public/login/login.component';
import {HRoutingModule} from './pages/private/h-routing.module';
import {HComponent} from './pages/private/h.component';
import {HModule} from './pages/private/h.module';
import { RegisterComponent } from './pages/public/register/register.component';
import { HomeComponent } from './pages/public/home/home.component';
import {ChartsModule} from 'ng2-charts';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
