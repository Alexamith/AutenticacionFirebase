import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LinkModel } from 'src/app/models/link.model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private url = 'http://localhost:3002/';
  
  constructor(private http:HttpClient) { }

  newLink(link: LinkModel){
    const infoLink = {
      ruta: link.link,
      protocolo:link.protocolo
    };
    console.log(infoLink);
    // return this.http.post(`http://localhost:3002/user/dashboard/register`,infoLink);
    return this.http.post(`${this.url}user/dashboard/register`,infoLink)
    .pipe(map(res =>{
      return res;
    }));
  }
}
