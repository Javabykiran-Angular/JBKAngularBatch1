import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore blanditiis aspernatur voluptatum et cupiditate. Praesentium velit eum itaque vel, culpa nulla ea quae consequuntur totam repellendus minima quos saepe voluptatem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore blanditiis aspernatur voluptatum et cupiditate. Praesentium velit eum itaque vel, culpa nulla ea quae consequuntur totam repellendus minima quos saepe voluptatem!";
  constructor() { }

  ngOnInit() {
  }

}
