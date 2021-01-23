import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public token: string;
  // public user : any ;
  public isAuthenticated ;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string)  {
    return this.http.post<{ jwt: any , user : any }>(environment.url + "authentication/login", { username: username, password: password })
  }

  logout() {
    // this.token = null;
    this.isAuthenticated = false;
    // this.clearAuthData();
    this.router.navigate(['/']);
  }

  // saveAuthData(token: string, expirationDate: Date , user :any) {
  //   localStorage.setItem("token", token);
  //   localStorage.setItem("id" , user.id);
  // }
  //
  // clearAuthData() {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("id");
  // }

  // getAuthData() {
  //   const token = localStorage.getItem("token");
  //   const id  = localStorage.getItem("id");
  //   const role =  localStorage.getItem("role");
  //   if (!token) {
  //     return;
  //   }
  //   return {
  //     token: token,
  //     id : id  ,
  //   }
  // }

}
