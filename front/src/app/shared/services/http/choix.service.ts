import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Choix } from '../../classes/Choix';

@Injectable({
  providedIn: 'root'
})
export class ChoixService {

  constructor(private http: HttpClient) { }

  create(choix : Choix): Observable<Choix> {
    return this.http.post<Choix>(environment.url + "choix" , choix);
  }

  delete(id: number) {
    return this.http.delete(environment.url + "choix/" + id);
  }
}
