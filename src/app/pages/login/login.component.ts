import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel;
  
  constructor() { }

  ngOnInit() {
    this.user = new UserModel();
  }
  submitFormLogin(formLogin:NgForm){
    if (formLogin.invalid) {
      return;
    }
    console.log(formLogin);
    console.log('Formulario login');

  }
}
