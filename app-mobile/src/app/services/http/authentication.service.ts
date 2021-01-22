import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../../classes/Agent';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient ,
              private router: Router ,
              private storage: Storage) { }

  login(matricule : any): Observable<Agent> {
    return this.http.post<Agent>(environment.url + "agents/login" , matricule);
  }

  logout() {
    this.storage.remove('auth_data').then() ;
    this.router.navigate(['/']);
  }

  saveAuthData(user : any) {
    this.storage.set('auth_data', user);
  }

  getAuthData() : any {
    return this.storage.get('auth_data')
  }

}
