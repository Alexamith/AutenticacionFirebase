import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: UserModel;
    recordarme = false;
  constructor(private service:AuthService, private router:Router) { }

  ngOnInit() { 
    this.user = new UserModel();
    this.user.email = "alex@gmail.com";
    
  }
  submitInfoRegister(formRregister:NgForm){
    // Valido el formulario
    if(formRregister.invalid){return;}

    this.service.newUser(this.user).subscribe(res => {
      console.log(res);
      if (this.recordarme) {
        localStorage.setItem('email',this.user.email);
      }
      this.router.navigateByUrl('/home');

    }, err=>{
      console.log(err.error.error.message);
    });
  }

}
