import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';


const routes: Routes = [
{
  path:'login',component:LoginComponent
},
{
  path:'home',component:HomeComponent,canActivate:[AuthGuard]
},
{
  path:'addEmployee',component:AddemployeeComponent,canActivate:[AuthGuard]
},
{
  path:'updateEmployee',component:UpdateemployeeComponent,canActivate:[AuthGuard]
},
{
  path:'',redirectTo:'/login',pathMatch:'full'
},
{
  path:'**',component:NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
