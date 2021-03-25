import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  submitInfoRegister(formRregister:NgForm){
    // Valido el formulario
    if(formRregister.invalid)
    {
      return;
    }

    console.log('Formulario registro');
    console.log(this.user);
    console.log(formRregister);
  }

}
