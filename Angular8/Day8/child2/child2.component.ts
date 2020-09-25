import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() childdata= new EventEmitter();

  childDataMsg:string="Data From Child To Parent";

  @Output() ChildToparentData=new EventEmitter();


  @Output() ChildEvent=new EventEmitter();

  ChildToParentOBJ={
    fname:"Sumit Raokhande",
    id:2
  }

  childToParentArrobj=[
    {
      fname:"Sumit Raokhande",
    id:2
    },
    {
      fname:"Java By Kiran",
    id:3
    },
    {
      fname:"XYZ",
    id:4
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  OnSend(){
    // this.childdata.emit(this.childDataMsg);

    // this.ChildToparentData.emit(this.ChildToParentOBJ);

    this.ChildEvent.emit(this.childToParentArrobj);
  }

}
