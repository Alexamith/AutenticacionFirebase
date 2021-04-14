import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private url = 'http://localhost:3002/';
  constructor(private http:HttpClient) { }

  newLink(){
    const infoLink = {
      ruta: "facebook.com  ",
      protocolo:"https:/"
    };

    // return this.http.post(`http://localhost:3002/`,infoLink);
    return this.http.post(`${this.url}user/dashboard/register`,infoLink)
    .pipe(map(res =>{
      return res;
    }));
  }
}
