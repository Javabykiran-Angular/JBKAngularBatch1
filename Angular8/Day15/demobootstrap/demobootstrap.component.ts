import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

  arrobj=[
    {
      fname:"Sumit",
      lname:"raokhande",
      id:1
    },
    {
      fname:"Kiran",
      lname:"raokhande",
      id:2
    },
    {
      fname:"Spruha",
      lname:"raokhande",
      id:3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
