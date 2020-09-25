import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  strdata:string="Lorem Ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem obcaecati rerum dolorum dolore voluptas quos sed dicta fugiat maiores cum voluptatum ab, repellat fuga eveniet iste reprehenderit iusto necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem obcaecati rerum dolorum dolore voluptas quos sed dicta fugiat maiores cum voluptatum ab, repellat fuga eveniet iste reprehenderit iusto necessitatibus!";
  strdata2:string='LoremIpsumDOLORsit ametconsectetur';

  person={
    fname:"sdfv",
    lname:"asrfasef",
    id:3
  }
  num1:number=5.678556;
  num2:number=0;

  mydate=new Date();

  constructor() {
    
   }

  ngOnInit() {
  }

}
