import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Formation } from '../../classes/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Formation[]> {
    return this.http.get<Formation[]>(environment.url + "formations" );
  }

  getStat(id :number): Observable<Formation[]> {
    return this.http.get<Formation[]>(environment.url + "formations/stat/" + id );
  }

  create(formation : Formation): Observable<Formation> {
    return this.http.post<Formation>(environment.url + "formations" , formation);
  }

  delete(id: number) {
    return this.http.delete(environment.url + "formations/" + id);
  }
}
