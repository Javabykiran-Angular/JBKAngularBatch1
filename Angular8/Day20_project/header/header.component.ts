import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string='';
  constructor(private router:Router) { }

  ngOnInit() {
    this.username=sessionStorage.getItem('name');
  }

  onLogout(){
    sessionStorage.clear();
    sessionStorage.removeItem('data');    
    this.router.navigate(['/login']);
  }

}
