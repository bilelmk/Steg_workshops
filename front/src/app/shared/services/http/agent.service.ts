import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../../classes/Agent';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Agent[]> {
    return this.http.get<Agent[]>(environment.url + "agents" );
  }

  create(agent : Agent): Observable<Agent> {
    return this.http.post<Agent>(environment.url + "agents" , agent);
  }

  delete(id: number) {
    return this.http.delete(environment.url + "agents/" + id);
  }
}
