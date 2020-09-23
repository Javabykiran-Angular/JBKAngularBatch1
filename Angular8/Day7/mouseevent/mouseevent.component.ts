import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouseevent',
  templateUrl: './mouseevent.component.html',
  styleUrls: ['./mouseevent.component.css']
})
export class MouseeventComponent implements OnInit {

  selected:string='';
  selected1:string='';
  selected2:string='';
  arrobj=[
      {
        product:"Samsum Mobile",
        Quantity:2,
        prize:10000,
        description:"Good product"
      },
      {
        product:"Motorola Mobile",
        Quantity:3,
        prize:20000,
        description:"Better product"
      },
      {
        product:"LG Mobile",
        Quantity:1,
        prize:5000,
        description:"Life's Good product"
      },
      {
        product:"Nokia Mobile",
        Quantity:3,
        prize:8000,
        description:"AVG product"
      }

  ];

  constructor() { }



  ngOnInit() {
  }

  OnMouseOver(item){
    // console.log("Event Occur "+item.product);
    this.selected=item.product;
  }

  OnMouseOutEvent(){
    this.selected='';
  }


  OnMouseOver1(item){
    // console.log("Event Occur "+item.product);
    this.selected1=item.prize;
  }

  OnMouseOutEvent1(){
    this.selected1='';
  }

  OnMouseOver2(item){
    // console.log("Event Occur "+item.product);
    this.selected2=item.description;
  }

  OnMouseOutEvent2(){
    this.selected2='';
  }


}
