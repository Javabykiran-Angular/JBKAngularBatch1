import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sumit-work';
  seconds:number=0;
  timer;
  constructor(){

    // The local storage uses the localStorage object to store data for your entire website on a permanent basis. That means the stored local data will be available on the next day, the next week, or the next year unless you remove it.
   
    // localStorage.clear();
    // localStorage.setItem('data',this.title);

    // sessionStorage.clear();
    // sessionStorage.setItem("data",this.title);

    // Session storage — The session storage uses the sessionStorage object to store data on a temporary basis, for a single browser window or tab. The data disappears when session ends i.e. when the user closes that browser window or tab.
    
    // You can create guard for your routes
    //so create guard file from cmd ng g g auth
    //in this file auth.guard implement canactivate interface
    //write a simple logic
    //and go to router config.write the key canActivate:[AuthGuard]  AuthGuardis our class name

    //If you want set timer you can use setInterval() method
    this.onStart();
  }

  onStart(){
    this.timer=setInterval(()=>{
      this.seconds++;
    },1000)
  }
  displayTimeElapsed(){
    return (Math.floor(this.seconds/3600)+' : '+Math.floor(this.seconds/60)+' : '+Math.floor(this.seconds%60));
  }
}
