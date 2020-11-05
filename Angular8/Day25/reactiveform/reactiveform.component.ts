import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myreactiveFormGroup:FormGroup;
  course=[
    {
      id:1,
      name:'Angular'
    },
    {
      id:2,
      name:'React Js'
    },
    {
      id:3,
      name:'MEAN'
    }
  ];

  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  notAllowedNames=['sumit','javaByKiran'];

  constructor() { }

  ngOnInit() {
    this.myreactiveFormGroup=new FormGroup({
      username:new FormControl(null,[Validators.required,this.NANames.bind(this)]),
      email:new FormControl(null,[Validators.required,Validators.email,Validators.pattern(this.EMAIL_PATTERN)]),
      gender:new FormControl(null,Validators.required),
      course:new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.myreactiveFormGroup);
    console.log("Username ===== "+this.myreactiveFormGroup.value.username);   

  }

  NANames(control:FormControl){
    
    if(this.notAllowedNames.indexOf(control.value)!==-1){
      return {'nameIsNotAllowed':true}; //this is custom error code 
    }

    return null;

   }

}
