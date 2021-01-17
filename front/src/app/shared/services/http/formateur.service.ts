import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Formateur } from '../../classes/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(environment.url + "formateurs" );
  }

  create(formateur : Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(environment.url + "formateurs" , formateur);
  }

  delete(id: number) {
    return this.http.delete(environment.url + "formateurs/" + id);
  }
}
