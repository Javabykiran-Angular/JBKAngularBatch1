import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count:number=0;
  strname:string="";
  strname2:string="";
  bgcolor:string='white';

  constructor() { }

  ngOnInit() {
  }

  
  onclick(){
    if(this.count==0){
      console.log("Click Event Occur!!!");
      this.count++;
      this.strname="JavaByKiran";
      
    } 
  }
  onclick2(myevent){
    console.log(myevent);
    console.log(myevent.target.value);
  }

  onClick3(myvalue){
    this.strname2=myvalue.value;
  }

  onChangeEvent(){
    this.bgcolor='green';
  }
  onFocus(){
    this.bgcolor='white';
  }

}
