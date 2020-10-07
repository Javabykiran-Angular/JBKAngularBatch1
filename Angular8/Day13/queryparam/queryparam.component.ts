import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  myobj={};
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {

    this.router.queryParamMap
    .subscribe((query)=>{
      console.log("Url Data is :: "+query.get('id'));
      console.log("Url Data is :: "+query.get('fname'));
      this.myobj={
        id:query.get('id'),
        fname:query.get('fname'),
        lname:query.get('lname'),
        status:query.get('status')
        
      }

    });

// 
  }

}
