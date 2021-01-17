import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Theme } from '../../classes/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Theme[]> {
    return this.http.get<Theme[]>(environment.url + "themes" );
  }

  create(theme : Theme): Observable<Theme> {
    return this.http.post<Theme>(environment.url + "themes" , theme);
  }

  delete(id: number) {
    return this.http.delete(environment.url + "themes/" + id);
  }
}
