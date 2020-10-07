import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  page2id:number;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap
    .subscribe((param)=>{
      console.log("Url parameter is "+param.get('id'));
      this.page2id=+param.get('id');
    })
  }

}
