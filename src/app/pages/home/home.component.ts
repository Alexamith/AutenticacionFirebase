import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LinksService } from 'src/app/services/links.service';
import { LinkModel } from 'src/app/models/link.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  enlace: LinkModel;
  
  constructor(private auth:AuthService, private router:Router, private link:LinksService) { }

  ngOnInit() {
    this.enlace = new LinkModel();
    this.enlace.protocolo ="https://";
  }
  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');

  }

  submitFormLink(formLink:NgForm){
    if (formLink.invalid) {
          return;
    }

    console.log(this.enlace);
    // this.link.newLink().subscribe(data => {
    //   console.log(data);
    // });
  }

  // submitFormLogin(formLogin:NgForm){
  //   if (formLogin.invalid) {
  //     return;
  //   }
  //   this.service.login(this.user).subscribe(res => {
  //     console.log(res);
  //     if (this.recordarme) {
  //       localStorage.setItem('email',this.user.email);
  //     }
  //     this.isError=false;
  //     this.route.navigateByUrl('/home');
  //   },err=>{
  //     this.isError = true;
  //     this.error = err.error.error.message;
  //     console.log(err.error.error.message);
  //   });
  // }
}
