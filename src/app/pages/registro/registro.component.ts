import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: UserModel;

  constructor() { }

  ngOnInit() { 
    this.user = new UserModel();
    this.user.email = "alex@gmail.com";
  }
  submitInfoRegister(){
    console.log('Formulario registro');
    console.log(this.user);
  }

}
