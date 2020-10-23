import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { MyhttpService } from '../myhttp.service';
import { DialogService } from '../shared/dialog.service';
import { ToastrService  } from 'ngx-toastr';


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
    private dialogservice:DialogService,
    private toastr:ToastrService
   ) { }

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
    },(error)=>{
      if(error.status>400 && error.status<=499){
        
        this.toastr.error("Server not available");
        
      }else if(error.status==0){
       
        this.toastr.error("Server not available");
      }
    });
  }

  onRadioClick(item){
    console.log(item);
   // this.isRadioClick=item.name;
   this.isRadioClick='ghh'
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
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe(res=>{
        console.log(res);
        if(res){
          //here call the delete the service
            //in delete service subscribe method you have to call toastr
            this.toastr.success('Deleted Successfully!!! ');
          
        }
      })
      
      
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
