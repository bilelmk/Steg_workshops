import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Question } from '../../classes/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getAllByFormation(id : number): Observable<Question[]> {
    return this.http.get<Question[]>(environment.url + "questions/" +id );
  }
}
