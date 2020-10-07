import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myid:number=8;
  myname:string='Sumit Raokhande';

  obj={
    id:3,
    fname:'Sumit',
    lname:'Raokhande',
    status:true
  };

  constructor() { }

  ngOnInit() {

  }

}
