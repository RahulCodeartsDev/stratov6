import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-username',
  templateUrl: './login-username.component.html',
  styleUrls: ['./login-username.component.scss']
})
export class LoginUsernameComponent implements OnInit {
 
  @ViewChild('myForm') myForm:NgForm | undefined
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(this.myForm);
    this.myForm?.reset
  }

}
