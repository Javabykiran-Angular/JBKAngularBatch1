import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomServiceComponent } from './custom-service/custom-service.component';
import { CourseService } from './course.service';
import { MyHttpComponent } from './my-http/my-http.component';
import {HttpClientModule} from '@angular/common/http';
import { MyhttpService } from './myhttp.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomServiceComponent,
    MyHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CourseService,MyhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
