import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  incorrect:string='';

  constructor(private routes:Router) { }

  ngOnInit() {
    sessionStorage.clear();
   // sessionStorage.setItem("data",'sumit');

   //localStorage--data permantely store
    document.body.classList.add('bg-img');
    
  }

  onSubmit(f){
    console.log(f.value);
    console.log(f.value.email);
    console.log(f.value.password);
    if(f.value.email=="admin@gmail.com" && f.value.password=="admin"){
     // console.log("Validate Success..");
     sessionStorage.setItem("data",'Sumit');
     this.routes.navigate(['/home']);

    }else{
     // alert("Incorrect Username & Password");
     this.incorrect='Incorrect Username & Password';
    }
  }

}
