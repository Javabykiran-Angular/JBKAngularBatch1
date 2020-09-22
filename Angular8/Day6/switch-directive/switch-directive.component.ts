import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {
  mycolor:string='';

  constructor() { }

  ngOnInit() {
  }
  MycolorSelect(value){
    this.mycolor=value;
  }

}
