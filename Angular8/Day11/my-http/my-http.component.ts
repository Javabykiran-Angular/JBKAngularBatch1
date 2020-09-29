import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.css']
})
export class MyHttpComponent implements OnInit {

   posts:any[]=[];  
  // posts:Object=[];  

  Id;
  Title:string='';
  Body:string='';
  ishidden:boolean=true;

  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.service.getAllPost()
    .subscribe((response)=>{
      console.log(response);
        this.posts=(<any>response);
      //  this.posts=response;

    }) 
  }

  onAddData(mytitle,mybody){
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
    })


  }

  OnUpdate(item){
    this.Id=item.id;
    this.Title=item.title;
    this.Body=item.body;
    this.ishidden=false;
  }

  OnFinalUpdate(){
    let obj={
      id:this.Id,
      title:this.Title,
      body:this.Body
    }

    this.Id="";
    this.Title="";
    this.Body="";
    this.ishidden=true;

    this.service.PostsDataUpdate(obj)
    .subscribe((response)=>{
      console.log(response);
    });


  }

}
