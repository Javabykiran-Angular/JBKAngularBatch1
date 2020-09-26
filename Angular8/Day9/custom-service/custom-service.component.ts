import { Component, OnInit } from '@angular/core';
import { MyService } from '../myservice.service';

@Component({
  selector: 'app-custom-service',
  templateUrl: './custom-service.component.html',
  styleUrls: ['./custom-service.component.css']
})
export class CustomServiceComponent implements OnInit {

  course=[];
 
  constructor(private service:MyService) {
    
    //Here We can't create a  objet use Dependeancy Injection  
    // this.service=new MyService();

    //  this.course=this.service.getAllCourse();
    //  console.log(this.course);

   }

  ngOnInit() {
    this.course=this.service.getAllCourse();  
    
  }

}
