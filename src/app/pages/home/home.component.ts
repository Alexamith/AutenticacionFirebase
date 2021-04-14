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
  error:string;
  isError:boolean;

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
    this.link.newLink(this.enlace).subscribe(data => {
      console.log(data);
      this.isError = false;
    },err=>{
      console.log(err.error);
      this.error = err.error.error;
      this.isError = true;
    });
  }
}
