import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel;
  
  constructor(private service:AuthService) { }

  ngOnInit() {
    this.user = new UserModel();
  }
  submitFormLogin(formLogin:NgForm){
    if (formLogin.invalid) {
      return;
    }
    this.service.login(this.user).subscribe(res => {
      console.log(res);
    },err=>{
      console.log(err.error.error.message);
    });
  }
}
