import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyhttpService } from '../myhttp.service';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  isRadioClick:string=null;
  username:string='';

  constructor(private service:MyhttpService,
    private router:Router,
    private dialogservice:DialogService) { }

  ngOnInit() {
  this.GetAllEmp();
 
  this.username=sessionStorage.getItem('name');
  console.log("Name is "+this.username);
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
    this.isRadioClick=item.name;
  // this.isRadioClick='ghh'
  }
  // onLogout(){
  //   sessionStorage.clear();
  //   sessionStorage.removeItem('data');    
  //   this.router.navigate(['/login']);
  // }
  onAddEmpolyee(){
    this.router.navigate(['/addEmployee']);
  }
  onDelete(){
    if(this.radioButtonValidation()){
      console.log("Radio Button is checked.");
      //Delete Api Call
    }else
    {
      console.log("Radio Button is Unchecked.");
    }
   // this.dialogservice.OpenConfirmDialog();
  }

  radioButtonValidation(){
    if(this.isRadioClick==null){
      alert("Please Select employee ..");
     return false;
    }
    else
    {
        console.log("ok selected "+this.isRadioClick);
        return true;
    }
  }

  onSuspend(){
    if(this.radioButtonValidation()){
      //Suspend Api call 
    }else{

    }
  }

  onUpdate(){
    if(this.radioButtonValidation()){
      //Update navigate update compo 
    }else{

    }
  }

}
