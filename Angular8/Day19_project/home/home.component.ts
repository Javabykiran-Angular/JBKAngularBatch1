import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  constructor(private service:MyhttpService,private router:Router) { }

  ngOnInit() {
  this.GetAllEmp();
  }

  GetAllEmp(){
    this.service.getAllEmployee()
    .subscribe((response)=>{
      this.EmpData=(<any>response);
      console.log(this.EmpData);
    });
  }

  onRadioClick(item){
    console.log(item);
    
  }
  onLogout(){
    sessionStorage.clear();
    sessionStorage.removeItem('data');    
    this.router.navigate(['/login']);
  }

}
