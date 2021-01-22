import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Formation } from '../../classes/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getFormations(id : number): Observable<Formation[]> {
    return this.http.get<Formation[]>(environment.url + "formations/agent/" + id );
  }
}
