import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel;
  error:string;
  isError:boolean;
  recordarme = false;
  constructor(private service:AuthService, private route:Router) { 
  }

  ngOnInit() {
    this.user = new UserModel();
    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }
  submitFormLogin(formLogin:NgForm){
    if (formLogin.invalid) {
      return;
    }
    this.service.login(this.user).subscribe(res => {
      console.log(res);
      if (this.recordarme) {
        localStorage.setItem('email',this.user.email);
      }
      this.isError=false;
      this.route.navigateByUrl('/home');
    },err=>{
      this.isError = true;
      this.error = err.error.error.message;
      console.log(err.error.error.message);
    });
  }
}
