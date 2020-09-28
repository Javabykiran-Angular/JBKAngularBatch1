import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.css']
})
export class MyHttpComponent implements OnInit {

  // posts:any[]=[];  
  posts:Object=[];  

  

  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.service.getAllPost()
    .subscribe((response)=>{
      console.log(response);
      // this.posts=(<any>response);
      this.posts=(response);

    }) 
  }

}
