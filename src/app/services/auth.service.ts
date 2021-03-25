import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/';
  private key = 'AIzaSyBBxsQNK2r5yzGYWREN3fxgDcrx3JOaivs';
  constructor(private http:HttpClient) { }

  logout(){
  
  }
  
  newUser(user:UserModel){
    const userData = {
      email: user.email,
      password: user.password,
      returnSecureToken:true
    }

    return this.http.post(`${this.url}accounts:signUp?key=${this.key}`,userData);
  }
  
  login(user:UserModel){
    
  }
}


// Crear nuevo usuario
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// Entrar
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]