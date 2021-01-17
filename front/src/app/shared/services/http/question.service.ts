import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Question} from '../../classes/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getAllByFormation(id : number): Observable<Question[]> {
    return this.http.get<Question[]>(environment.url + "questions/" +id );
  }

  create(question : Question): Observable<Question> {
    return this.http.post<Question>(environment.url + "questions" , question);
  }

  delete(id: number) {
    return this.http.delete(environment.url + "questions/" + id);
  }
}
