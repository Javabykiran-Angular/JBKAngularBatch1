import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyhttpService } from './myhttp.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    NotfoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard,MyhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
