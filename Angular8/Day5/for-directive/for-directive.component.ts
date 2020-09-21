import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {
 
  course=["Angular 8","react js","Vue Js","Embber Js","JSP"];

  empdetail=[];

  constructor() { }

  ngOnInit() {
  }

  AddEmp(fname,lname,salary){

    // this.empdetail=[
      // {
      //   Fname:fname,
      //   Lname:lname,
      //   Salary:salary
      // }
    // ]

    this.empdetail.splice(0,0, {
      Fname:fname,
      Lname:lname,
      Salary:salary
    })

  }

  RemoveEmployee(item,i){
    this.empdetail.splice(i,1);
  }

}
