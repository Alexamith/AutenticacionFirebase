import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: UserModel;

  constructor(private service:AuthService) { }

  ngOnInit() { 
    this.user = new UserModel();
    this.user.email = "alex@gmail.com";
    
  }
  submitInfoRegister(formRregister:NgForm){
    // Valido el formulario
    if(formRregister.invalid){return;}

    this.service.newUser(this.user).subscribe(res => {
      console.log(res);
    }, err=>{
      console.log(err.error.error.message);
    });
  }

}
