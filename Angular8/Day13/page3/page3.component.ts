import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  page3id:number;
  page3name:string='';
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {

    this.router.paramMap
    .subscribe((param)=>{
      this.page3id=+param.get('id');
      this.page3name=param.get('name');
    });
  }

}
