import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {
 
  course=["Angular 8","react js","Vue Js","Embber Js","JSP"];

  empdetail=[];

  arrobj=[
    {
      fname:"Sumit",
      lname:"Raokhande",
      id:1     
    },
    {
      fname:"Java By",
      lname:"Kiran",
      id:2     
    },
    {
      fname:"Spruha",
      lname:"Raokhande",
      id:3     
    },
    {
      fname:"Kiran",
      lname:"Raokhande",
      id:4     
    }
  ]

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
