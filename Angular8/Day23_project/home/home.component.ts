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

  nameSearch:string='';
  tempEmpdata:any[]=[
    {
      id:1,
      name:'sumit',
      departmentit:'IT',
      status:'Active',
      phoneno:9960556397,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:2,
      name:'Kiran',
      departmentit:'Marketing',
      status:'Active',
      phoneno:9960558956,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit1',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    }, {
      id:3,
      name:'Spruha',
      departmentit:'Administrative',
      status:'InActive',
      phoneno:8087556397,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:4,
      name:'Amit',
      departmentit:'IT',
      status:'InActive',
      phoneno:9960789397,
      country:{
        cid:3,
        cname:'Germany'
      },
      createddtm:'22-10-2020',
      createdby:'Kiran',
      updateddtm:'22-10-2020',
      updatedby:'Kiran'

    },
    {
      id:5,
      name:'Nilam',
      departmentit:'Account',
      status:'Active',
      phoneno:8460556397,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Kiran'

    },
    {
      id:6,
      name:'Pratiksha',
      departmentit:'Development',
      status:'Active',
      phoneno:9960556032,
      country:{
        cid:3,
        cname:'Germany'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },{
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },{
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    }
  ];
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
       
        this.toastr.error("Server not available!!!!!!");
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

      //call suspend api 
      //whose subscribe method we call toaster message
     // this.toastr.info('Employee is suspended!!!!!');
     this.toastr.warning('Employee is suspended!!!!!');

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
