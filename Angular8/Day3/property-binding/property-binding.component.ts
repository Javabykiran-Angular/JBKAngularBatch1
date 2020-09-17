import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name:string="Sumit Raokahde";
  imgurl="../assets/Desert.jpg";
  ishidden:boolean=false;
  ishidden1:boolean=false;
  ishidden2:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
