import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myid:number=8;
  myname:string='Sumit Raokhande';

  // obj={
  //   id:3,
  //   fname:'Sumit',
  //   lname:'Raokhande',
  //   status:true,
  //   country:{
  //     cid:22,
  //     cname:'India'
  //   }
  // };

  obj={
    id:3,
    fname:'Sumit',
    lname:'Raokhande',
    status:true,
    
  };

  constructor(private routes:Router) { }

  ngOnInit() {

  }

  onpage1(){
    this.routes.navigate(['/Page1']);
  }
  onpage2(){
    this.myid=9;
    this.routes.navigate(['/Page2',this.myid]);
  }
  onpage3(){
    this.myid=9;
    this.myname='Rupali-Jamdhade';
    this.routes.navigate(['/Page3',this.myid,this.myname])
  }
  onFollower(){
    this.routes.navigate(['/follower']);
  }

  onQueryParam(){
    this.obj.id=5;
    this.obj.fname="Anjali";
    this.obj.lname='Bhoge';
    this.obj.status=true;    
    this.routes.navigate(['/Queryparam'],{
      queryParams:this.obj
    });
  }

  OnMultiparam(){
    this.routes.navigate(['/Multipleparam',this.myid],{
      queryParams:this.obj
    })
  }
}
