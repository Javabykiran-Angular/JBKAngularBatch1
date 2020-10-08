import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { QueryparamComponent } from './queryparam/queryparam.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"Page1",
    component:Page1Component
  },
  {
    path:"Page2",
    component:Page2Component
  },
  {
    path:"Page2/:id",
    component:Page2Component
  },
  {
    path:"Page3/:id/:name",
    component:Page3Component
  },
  {
    path:"follower",
    component:FollowerComponent
  },
  {
    path:"myfollower",
    component:MyfollowerComponent
  },
  {
    path:"Queryparam",
    component:QueryparamComponent
  },
  {
    path:"Multipleparam/:id",
    component:QueryparamComponent
  },
  {
    path:"**",
    component:NotfoundComponent
  }
];

export const compoImport=[HomeComponent,NotfoundComponent,MyfollowerComponent,FollowerComponent,Page3Component,Page2Component,Page1Component,QueryparamComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
