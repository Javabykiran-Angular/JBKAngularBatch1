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
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { SuspendedListComponent } from './suspended-list/suspended-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    NotfoundComponent,
    HeaderComponent,
    FilterPipe,
    SuspendedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, //import animation
    MaterialModule,
    LoadingBarRouterModule, //For loading Bar 

    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })
  ],
  providers: [AuthGuard,MyhttpService],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { }
