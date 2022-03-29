import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hum:boolean= true;
  open:boolean = false;
  constructor( public router: Router) { }

  ngOnInit(): void {
  }

  ham_menu(){
    this.open= true;
    this.hum= false;
  }
  close_menu(){
    this.open= false;
    this.hum= true;
  }

}
