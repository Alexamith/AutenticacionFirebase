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
  isNotError:boolean;
  links:{};

  constructor(private auth:AuthService, private router:Router, private link:LinksService) { 
    this.getAllLinks();
  }

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

    this.link.newLink(this.enlace).subscribe(data => {
      console.log(data);
      this.isNotError= false;
      this.isError = false;
      this.getAllLinks();
    },err=>{
      this.error = err.error.error;
      this.isError = true;
    this.isNotError = true;

    });
  }
  getAllLinks(){
    this.link.getLink().subscribe(data => {
       this.isNotError = false;
      this.isError = false;
      this.links=data['enlaces'];
    },err=>{
      this.error = err.error.error;
      this.isError = true;
    this.isNotError = true;

    });
  }

  visitURL(id:string){
    this.link.getLinkId(id).subscribe(data => {
      this.isNotError = false;
      this.isError = false;
      this.getAllLinks();
   },err=>{
    this.error = err.error.error;
    this.isError = true;
    this.isNotError = true;

  });
  }
  delete(id:string){
    this.link.deleteLinkId(id).subscribe(data => {
      this.isNotError = false;
      this.isError = false;
      this.getAllLinks();
   },err=>{
    this.error = err.error.error;
    this.isError = true;
    this.isNotError = true;

  });
  }
}
