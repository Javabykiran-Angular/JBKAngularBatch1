import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string="success";
  myclass1:string="warning";
  myclass2:string="danger";
  rating:number=2;
  iserror:boolean=false;
  isSpecial:boolean=true;

  myobj={
    "success":!this.iserror,
    "warning":this.iserror,
    "special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
